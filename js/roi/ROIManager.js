import * as DOMUtils from "../ui/utils/dom-utils.js"
import ROISet, {screenCoordinates} from './ROISet.js'
import {getElementVerticalDimension, getFilename} from "../util/igvUtils.js"
import {inferFileFormat} from "../util/fileFormatUtils.js"
import ROIMenu from "./ROIMenu.js"
import ROITable from "./ROITable.js"


class ROIManager {

    constructor(browser) {

        this.browser = browser
        this.roiMenu = new ROIMenu(browser, browser.columnContainer)
        this.roiTable = new ROITable(browser, browser.columnContainer)
        this.top = 0
        this.roiSets = []
        this.boundLocusChangeHandler = locusChangeHandler.bind(this)
        browser.on('locuschange', this.boundLocusChangeHandler)

        const updateROIDimensions = () => {

            const tracks = browser.findTracks(track => new Set(['ideogram', 'ruler']).has(track.type))
            const [rectA, rectB] = tracks
                .map(track => track.trackView.viewports[0].$viewport.get(0))
                .map(element => getElementVerticalDimension(element))
            
            //Covers cases in which ruler and/or ideogram are hidden
            const heightA = rectA ? rectA.height : 0
            const heightB = rectB ? rectB.height : 0
            
            const elements = browser.columnContainer.querySelectorAll('.igv-roi-region')

            const fudge = -0.5
            if (elements) {
                for (const element of elements) {
                    element.style.marginTop = `${heightA + heightB + fudge}px`
                }

            }
        }

        this.observer = new MutationObserver(updateROIDimensions)
        //const [ column ] = browser.columnContainer.querySelectorAll('.igv-column')
        this.observer.observe(browser.columnContainer, {attributes: true, childList: true, subtree: true})

    }

    async reset() {

        if (this.roiSets.length > 0) {
            this.browser.roiTableControl.setVisibility(true)
        }

        const promises = this.roiSets.map(roiSet => this.renderROISet({
            browser: this.browser,
            pixelTop: this.top,
            roiSet
        }))

        if (promises.length > 0) {
            await Promise.all(promises)
        }

        const records = await this.getTableRecords()
        this.roiTable.renderTable(records)

        if (this.roiSets.length > 0) {
            const isVisible = this.roiSets[0].isVisible
            this.roiTable.setROIVisibility(isVisible)
        }

    }

    async loadROI(config, genome) {

        const configs = Array.isArray(config) ? config : [config]

        for (let config of configs) {
            if (!config.name && config.url) {
                config.name = await getFilename(config.url)
            }
            if (config.url && !config.format) {
                config.format = await inferFileFormat(config)
            }
            this.roiSets.push(new ROISet(config, genome))
        }

        await this.reset()

    }

    clearROIs() {

        this.roiTable.clearTable()

        const elements = this.browser.columnContainer.querySelectorAll('.igv-roi-region')
        for (let el of elements) {
            el.remove()
        }

        for (let roiSet of this.roiSets) {
            roiSet.dispose()
        }

        this.roiSets = []

    }

    async getTableRecords() {

        const records = []

        for (let roiSet of this.roiSets) {
            const setName = (roiSet.name || '')
            const allFeatures = await roiSet.getAllFeatures()
            for (let chr of Object.keys(allFeatures)) {
                for (let feature of allFeatures[chr]) {
                    records.push({setName, feature})
                }
            }
        }

        return records
    }

    presentTable() {
        this.roiTable.present()
    }

    async repaintTable() {
        const records = await this.getTableRecords()
        this.roiTable.renderTable(records)
    }

    dismissTable() {
        this.roiTable.dismiss()
    }

    roiTableIsVisible() {
        return this.roiTable.isVisible()
    }

    async updateUserDefinedROISet(feature) {

        let userDefinedROISet = await this.getUserDefinedROISet()

        if (undefined === userDefinedROISet) {
            userDefinedROISet = this.initializeUserDefinedROISet()
        }

        userDefinedROISet.addFeature(feature)

        this.setROITableButtonVisibility(true)

        await this.renderROISet({browser: this.browser, pixelTop: this.top, roiSet: userDefinedROISet})

        const records = await this.getTableRecords()
        this.roiTable.renderTable(records)
    }

    setROITableButtonVisibility(isVisible) {
        this.browser.roiTableControl.setVisibility(isVisible)
    }

    toggleROIs() {

        const isVisible = !(this.roiSets[0].isVisible)
        this.roiTable.setROIVisibility(isVisible)

        for (const roiSet of this.roiSets) {
            roiSet.isVisible = isVisible
        }
    }

    async renderAllROISets() {

        for (let roiSet of this.roiSets) {
            await this.renderROISet({browser: this.browser, pixelTop: this.top, roiSet})
        }
    }

    async renderROISet({browser, pixelTop, roiSet}) {

        const columns = browser.columnContainer.querySelectorAll('.igv-column')

        for (let i = 0; i < columns.length; i++) {

            let {chr, start: viewStart, end: viewEnd, bpPerPixel} = browser.referenceFrameList[i]

            const elements = columns[i].querySelectorAll('.igv-roi-region')
            for (let el of elements) {
                const regionKey = el.dataset.region
                const {chr: regionChr, start: regionStart, end: regionEnd} = parseRegionKey(regionKey)
                if (regionChr !== chr || regionEnd < viewStart || regionStart > viewEnd) {
                    el.remove()
                }
            }

            const features = await roiSet.getFeatures(chr, viewStart, viewEnd)

            if (features) {

                for (let feature of features) {
                    const regionKey = createRegionKey(chr, feature.start, feature.end)

                    const {
                        x: pixelX,
                        width: pixelWidth
                    } = screenCoordinates(Math.max(viewStart, feature.start), Math.min(viewEnd, feature.end), viewStart, bpPerPixel)


                    const el = columns[i].querySelector(createSelector(regionKey))

                    if (el) {
                        el.style.left = `${pixelX}px`
                        el.style.width = `${pixelWidth}px`

                    } else {
                        const element = this.createRegionElement(browser.columnContainer, pixelTop, pixelX, pixelWidth, roiSet, regionKey, feature)
                        columns[i].appendChild(element)
                    }
                }
            }
        }
    }

    createRegionElement(columnContainer, pixelTop, pixelX, pixelWidth, roiSet, regionKey, feature) {

        const regionElement = DOMUtils.div({class: 'igv-roi-region'})

        regionElement.style.top = `${pixelTop}px`
        regionElement.style.left = `${pixelX}px`
        regionElement.style.width = `${pixelWidth}px`
        regionElement.style.backgroundColor = roiSet.color
        regionElement.dataset.color = roiSet.color
        regionElement.dataset.region = regionKey

        const header = DOMUtils.div()
        regionElement.appendChild(header)

        header.style.backgroundColor = roiSet.headerColor

        header.addEventListener('click', event => {
            event.preventDefault()
            event.stopPropagation()

            const {x, y} = DOMUtils.translateMouseCoordinates(event, columnContainer)
            this.roiMenu.present(feature, roiSet, event, this, columnContainer, regionElement)
        })


        return regionElement
    }

    renderSVGContext(columnContainer, context, {deltaX, deltaY}) {

        for (const regionElement of columnContainer.querySelectorAll('.igv-roi-region')) {

            // body
            const {x, y, width, height} = regionElement.getBoundingClientRect()
            context.fillStyle = regionElement.style.backgroundColor
            context.fillRect(x - deltaX, y + deltaY, width, height)

            // header
            const header = regionElement.querySelector('div')
            const {x: xx, y: yy, width: ww, height: hh} = header.getBoundingClientRect()
            context.fillStyle = header.style.backgroundColor
            context.fillRect(xx - deltaX, yy + deltaY, ww, hh)
        }
    }

    getUserDefinedROISet() {
        return this.roiSets.find(roiSet => true === roiSet.isUserDefined)
    }

    initializeUserDefinedROISet() {

        const config =
            {
                name: 'user defined',
                isUserDefined: true,
                features: []
            }
        const userDefinedROISet = new ROISet(config, this.browser.genome)
        this.roiSets.push(userDefinedROISet)

        return userDefinedROISet
    }

    async deleteRegionWithKey(regionKey, columnContainer) {

        columnContainer.querySelectorAll(createSelector(regionKey)).forEach(node => node.remove())

        const {feature, set} = await this.findRegionWithKey(regionKey)

        if (set) {
            set.removeFeature(feature)
        }

        const records = await this.getTableRecords()

        if (0 === records.length) {
            this.browser.roiTableControl.buttonHandler(false)
            this.setROITableButtonVisibility(false)
        }

    }

    async findRegionWithKey(regionKey) {

        const {chr, start, end} = parseRegionKey(regionKey)

        for (let set of this.roiSets) {
            const features = await set.getFeatures(chr, start, end)

            for (let feature of features) {
                if (feature.chr === chr && feature.start >= start && feature.end <= end) {
                    return {feature, set}
                }
            }
        }

        return {feature: undefined, set: undefined}
    }

    toJSON() {
        return this.roiSets.map(roiSet => roiSet.toJSON())
    }

    dispose() {

        this.browser.off('locuschange', this.boundLocusChangeHandler)

        const removable = this.browser.columnContainer.querySelectorAll('.igv-roi-region')

        for (let el of removable) {
            el.remove()
        }

        if (this.roiMenu) {
            this.roiMenu.dispose()
        }

        if (this.roiTable) {
            this.roiTable.dispose()
        }

        for (let roiSet of this.roiSets) {
            roiSet.dispose()
        }

        for (let key of Object.keys(this)) {
            this[key] = undefined
        }

    }
}

function locusChangeHandler() {
    this.renderAllROISets()
}

function createRegionKey(chr, start, end) {
    return `${chr}-${start}-${end}`
}

function createSelector(regionKey) {
    return `[data-region="${regionKey}"]`
}

function parseRegionKey(regionKey) {
    let regionParts = regionKey.split('-')
    let ee = parseInt(regionParts.pop())
    let ss = parseInt(regionParts.pop())
    let chr = regionParts.join('-')

    return {chr, start: ss, end: ee, locus: `${chr}:${ss}-${ee}`, bedRecord: `${chr}\t${ss}\t${ee}`}
}

export {createRegionKey, parseRegionKey}

export default ROIManager
