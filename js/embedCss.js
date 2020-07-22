function embedCSS() {

    var css =  '.igv-user-feedback {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 512px;\n  height: 360px;\n  z-index: 2048;\n  background-color: white;\n  border-color: #a2a2a2;\n  border-style: solid;\n  border-width: thin;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: medium;\n  font-weight: 400;\n  color: #444;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center; }\n  .igv-user-feedback div:first-child {\n    position: relative;\n    height: 24px;\n    width: 100%;\n    background-color: white;\n    border-bottom-color: #a2a2a2;\n    border-bottom-style: solid;\n    border-bottom-width: thin; }\n    .igv-user-feedback div:first-child div {\n      position: absolute;\n      top: 2px;\n      width: 16px;\n      height: 16px;\n      background-color: transparent; }\n    .igv-user-feedback div:first-child div:first-child {\n      left: 8px; }\n    .igv-user-feedback div:first-child div:last-child {\n      cursor: pointer;\n      right: 8px; }\n  .igv-user-feedback div:last-child {\n    width: 100%;\n    height: calc(100% - 24px);\n    border-width: 0; }\n    .igv-user-feedback div:last-child div {\n      width: auto;\n      height: auto;\n      margin: 8px; }\n\n.igvControlDiv {\n  position: relative; }\n\n.igv-content-header {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 10px;\n  height: 16px;\n  width: 100%; }\n  .igv-content-header .igv-ideogram-shim {\n    height: 100%;\n    width: 50px;\n    background-color: white; }\n  .igv-content-header .igv-ideogram-content {\n    height: 100%;\n    background-color: white; }\n  .igv-content-header .igv-ideogram-content-border-right {\n    border-right-color: #292929;\n    border-right-style: solid;\n    border-right-width: 1px; }\n\n.igv-multi-locus-panel-border {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 1px;\n  background-color: green;\n  border-right-color: #ff0000;\n  border-right-style: solid;\n  border-right-width: 1px; }\n\n.igv-navbar {\n  position: relative;\n  padding-left: 8px;\n  padding-right: 8px;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  color: #444;\n  font-size: 12px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  line-height: 32px;\n  margin-top: 2px;\n  margin-bottom: 4px;\n  height: 32px;\n  border-style: solid;\n  border-radius: 3px;\n  border-width: thin;\n  border-color: #bfbfbf;\n  background-color: #f3f3f3; }\n\n.igv-nav-bar-left-container {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  height: 32px;\n  line-height: 32px; }\n  .igv-nav-bar-left-container .igv-logo {\n    all: initial;\n    width: 34px;\n    height: 32px;\n    margin-right: 8px; }\n  .igv-nav-bar-left-container .igv-current-genome {\n    height: 32px;\n    margin-left: 4px;\n    margin-right: 4px;\n    user-select: none;\n    line-height: 32px;\n    vertical-align: middle;\n    text-align: center; }\n\n.igv-nav-bar-genomic-location {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%; }\n\n.igv-chromosome-select-widget-container {\n  height: 100%;\n  width: 125px;\n  margin-right: 4px;\n  display: flex;\n  flex-flow: column;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  align-items: center; }\n  .igv-chromosome-select-widget-container select {\n    display: block;\n    cursor: pointer;\n    width: 100px;\n    height: 75%;\n    outline: none;\n    font-size: 12px;\n    font-family: \"Open Sans\", sans-serif;\n    font-weight: 400; }\n\n.igv-locus-size-group {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 8px;\n  height: calc(32px - 10px); }\n  .igv-locus-size-group .igv-search-container {\n    width: 200px;\n    height: calc(32px - 10px);\n    line-height: calc(32px - 10px);\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    align-items: center; }\n    .igv-locus-size-group .igv-search-container input {\n      cursor: text;\n      width: 85%;\n      height: calc(32px - 10px);\n      line-height: calc(32px - 10px);\n      font-size: 12px;\n      font-family: \"Open Sans\", sans-serif;\n      font-weight: 400;\n      text-align: left;\n      padding-left: 8px;\n      margin-right: 8px;\n      outline: none;\n      border-style: solid;\n      border-radius: 3px;\n      border-width: thin;\n      border-color: #bfbfbf;\n      background-color: white; }\n    .igv-locus-size-group .igv-search-container div {\n      cursor: pointer;\n      height: 16px;\n      width: 16px; }\n  .igv-locus-size-group .igv-windowsizepanel-content-div {\n    margin-left: 4px;\n    user-select: none; }\n\n.igv-nav-bar-right-container {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  height: 32px;\n  line-height: 32px; }\n  .igv-nav-bar-right-container .igv-nav-bar-toggle-button-container {\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    align-items: center;\n    height: 100%; }\n    .igv-nav-bar-right-container .igv-nav-bar-toggle-button-container div {\n      margin-left: 0;\n      margin-right: 4px; }\n    .igv-nav-bar-right-container .igv-nav-bar-toggle-button-container div:last-child {\n      margin-left: 0;\n      margin-right: 0; }\n  .igv-nav-bar-right-container .igv-nav-bar-toggle-button-container-750 {\n    display: none; }\n  .igv-nav-bar-right-container .igv-zoom-widget {\n    color: #737373;\n    font-size: 18px;\n    height: 32px;\n    line-height: 32px;\n    margin-left: 8px;\n    user-select: none;\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    justify-content: flex-end;\n    align-items: center; }\n    .igv-nav-bar-right-container .igv-zoom-widget div {\n      cursor: pointer;\n      margin-left: unset;\n      margin-right: unset; }\n    .igv-nav-bar-right-container .igv-zoom-widget div:first-child {\n      height: 24px;\n      width: 24px;\n      margin-left: unset;\n      margin-right: 8px; }\n    .igv-nav-bar-right-container .igv-zoom-widget div:last-child {\n      height: 24px;\n      width: 24px;\n      margin-left: 8px;\n      margin-right: unset; }\n    .igv-nav-bar-right-container .igv-zoom-widget div:nth-child(even) {\n      display: block;\n      height: fit-content; }\n    .igv-nav-bar-right-container .igv-zoom-widget input {\n      display: block;\n      width: 125px; }\n    .igv-nav-bar-right-container .igv-zoom-widget svg {\n      display: block; }\n  .igv-nav-bar-right-container .igv-zoom-widget-900 {\n    color: #737373;\n    font-size: 18px;\n    height: 32px;\n    line-height: 32px;\n    margin-left: 8px;\n    user-select: none;\n    display: flex;\n    flex-flow: row;\n    flex-wrap: nowrap;\n    justify-content: flex-end;\n    align-items: center; }\n    .igv-nav-bar-right-container .igv-zoom-widget-900 div {\n      cursor: pointer;\n      margin-left: unset;\n      margin-right: unset; }\n    .igv-nav-bar-right-container .igv-zoom-widget-900 div:first-child {\n      height: 24px;\n      width: 24px;\n      margin-left: unset;\n      margin-right: 8px; }\n    .igv-nav-bar-right-container .igv-zoom-widget-900 div:last-child {\n      height: 24px;\n      width: 24px;\n      margin-left: 8px;\n      margin-right: unset; }\n    .igv-nav-bar-right-container .igv-zoom-widget-900 div:nth-child(even) {\n      width: 0;\n      height: 0;\n      display: none; }\n    .igv-nav-bar-right-container .igv-zoom-widget-900 input {\n      width: 0;\n      height: 0;\n      display: none; }\n    .igv-nav-bar-right-container .igv-zoom-widget-900 svg {\n      display: block; }\n  .igv-nav-bar-right-container .igv-zoom-widget-hidden {\n    display: none; }\n\n.igv-nav-bar-button {\n  box-sizing: unset;\n  padding-left: 6px;\n  padding-right: 6px;\n  height: 18px;\n  text-transform: capitalize;\n  user-select: none;\n  line-height: 18px;\n  text-align: center;\n  vertical-align: middle;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 11px;\n  font-weight: 200;\n  color: #737373;\n  background-color: #f3f3f3;\n  border-color: #737373;\n  border-style: solid;\n  border-width: thin;\n  border-radius: 6px; }\n\n.igv-nav-bar-button-clicked {\n  color: white;\n  background-color: #737373; }\n\n.igv-nav-bar-button:hover {\n  cursor: pointer; }\n\n.igv-logo-nonav {\n  margin-left: 4px;\n  margin-top: 12px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 16px; }\n\n.igv-search-results {\n  position: absolute;\n  top: 32px;\n  left: 2px;\n  height: 320px;\n  width: 213px;\n  background-color: white;\n  border-color: #7F7F7F;\n  border-style: solid;\n  border-width: thin;\n  overflow-x: hidden;\n  overflow-y: auto;\n  z-index: 9999; }\n  .igv-search-results tr {\n    font-family: \"Open Sans\", sans-serif;\n    font-size: small;\n    font-weight: 400;\n    color: #444; }\n  .igv-search-results tr:hover,\n  .igv-search-results tr:focus,\n  .igv-search-results tr:active {\n    cursor: pointer;\n    font-weight: 700;\n    color: #141414; }\n\n.igv-canvas {\n  all: initial; }\n\n.igv-root-div {\n  position: relative;\n  left: 0;\n  right: 0;\n  height: auto;\n  margin-left: 10px;\n  margin-right: 10px;\n  padding-top: 4px; }\n\n.igv-content-div {\n  position: relative;\n  width: 100%;\n  height: 100%; }\n\n.igv-track-container-div {\n  user-select: none;\n  position: relative;\n  clear: both; }\n\n.igv-track-div {\n  position: relative;\n  width: 100%;\n  margin-top: 5px;\n  margin-bottom: 5px; }\n\n.igv-viewport-container {\n  position: absolute;\n  left: 50px;\n  right: 50px;\n  height: 100%;\n  white-space: nowrap;\n  overflow-x: hidden;\n  overflow-y: hidden; }\n\n.igv-viewport-div {\n  position: relative;\n  display: inline-block;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: hidden; }\n\n.igv-viewport-content-div {\n  position: absolute;\n  width: 100%; }\n\n.igv-viewport-message {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: rgba(0, 0, 0, 0.15);\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 25px;\n  font-weight: bold;\n  user-select: none; }\n\n.igv-whole-genome-container {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  width: 100%;\n  height: 100%;\n  background-color: white; }\n  .igv-whole-genome-container div {\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 10px;\n    font-weight: 400;\n    color: #444;\n    height: 100%;\n    text-align: center;\n    border-right-color: #bfbfbf;\n    border-right-style: solid;\n    border-right-width: thin; }\n    .igv-whole-genome-container div span {\n      display: block;\n      padding-top: 6px;\n      text-overflow: ellipsis; }\n  .igv-whole-genome-container div:last-child {\n    border-right-color: transparent; }\n  .igv-whole-genome-container div:hover,\n  .igv-whole-genome-container div:focus,\n  .igv-whole-genome-container div:active {\n    cursor: pointer;\n    background-color: #efefef; }\n\n.igv-viewport-div-border-right {\n  border-right-color: #292929;\n  border-right-style: solid;\n  border-right-width: 1px; }\n\n.igv-multi-locus-panel-close-container {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  width: 16px;\n  height: 16px;\n  color: #666666;\n  z-index: 1000; }\n\n.igv-multi-locus-panel-close-container:hover {\n  cursor: pointer;\n  color: #434343; }\n\n.igv-multi-locus-panel-label-div {\n  position: absolute;\n  left: 50%;\n  top: 25%;\n  transform: translate(-50%, -25%);\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  text-align: center;\n  min-width: 16px;\n  z-index: 64;\n  color: #373737;\n  background-color: white;\n  padding: 1px; }\n\n.igv-multi-locus-panel-label-div:hover {\n  cursor: pointer; }\n\n.igv-viewport-ruler {\n  cursor: pointer;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 10px;\n  font-weight: 200;\n  text-align: center; }\n  .igv-viewport-ruler > div {\n    height: 100%; }\n\n.igv-viewport-sequence {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 8px;\n  font-weight: 200;\n  text-align: center; }\n\n.igv-viewport-spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1024;\n  width: 24px;\n  height: 24px;\n  pointer-events: none;\n  color: #737373; }\n\n.igv-track-container-spinner {\n  position: absolute;\n  top: 90%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1024;\n  width: 24px;\n  height: 24px;\n  pointer-events: none;\n  color: #737373; }\n\n.igv-ruler-sweeper-div {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 0;\n  height: 100%;\n  z-index: 99999;\n  background-color: rgba(68, 134, 247, 0.25); }\n\n.igv-right-hand-gutter {\n  position: absolute;\n  right: 0;\n  width: 36px;\n  height: 100%;\n  background: white;\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.igv-left-hand-gutter {\n  position: absolute;\n  left: 0;\n  width: 50px;\n  height: 100%; }\n  .igv-left-hand-gutter canvas {\n    position: absolute; }\n\n.igv-track-menu-border-top {\n  border-top-color: #a2a2a2;\n  border-top-style: solid;\n  border-top-width: thin; }\n\n.igv-track-menu-category {\n  padding-left: 4px;\n  font-weight: 400; }\n\n.igv-track-drag-scrim {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  z-index: 256;\n  background-color: rgba(68, 134, 247, 0.25); }\n\n.igv-track-manipulation-handle {\n  cursor: pointer;\n  position: absolute;\n  right: 36px;\n  width: 12px;\n  margin-left: 2px;\n  height: 100%;\n  box-sizing: border-box;\n  font-size: medium;\n  border-color: #c4c4c4;\n  border-style: solid;\n  border-width: thin;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n  z-index: 512;\n  background-color: #c4c4c4; }\n\n.igv-track-manipulation-handle:hover,\n.igv-track-manipulation-handle:focus,\n.igv-track-manipulation-handle:active {\n  border-color: #7e7e7e;\n  background-color: #7e7e7e; }\n\n.igv-track-label {\n  position: absolute;\n  left: 8px;\n  top: 8px;\n  width: auto;\n  height: auto;\n  max-width: 200px;\n  padding-left: 4px;\n  padding-right: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: small;\n  font-weight: 400;\n  text-align: center;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  border-color: #444;\n  border-radius: 2px;\n  border-style: solid;\n  border-width: thin;\n  background-color: white;\n  z-index: 128;\n  cursor: pointer; }\n\n.igv-track-label:hover,\n.igv-track-label:focus,\n.igv-track-label:active {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.igv-scrollbar-outer-div {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 14px;\n  height: 100%;\n  background-color: white; }\n  .igv-scrollbar-outer-div div {\n    position: absolute;\n    top: 0;\n    left: 3px;\n    width: 8px;\n    border-style: solid;\n    border-width: thin;\n    border-color: #c4c4c4;\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n    background-color: white; }\n  .igv-scrollbar-outer-div div:hover,\n  .igv-scrollbar-outer-div div:focus,\n  .igv-scrollbar-outer-div div:active {\n    cursor: pointer;\n    background-color: #c4c4c4; }\n\n.zoom-in-notice-container {\n  position: absolute;\n  top: 10px;\n  left: 50%; }\n  .zoom-in-notice-container div {\n    position: relative;\n    left: -50%;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: medium;\n    font-weight: 400;\n    color: #3f3f3f;\n    background-color: rgba(255, 255, 255, 0.51);\n    z-index: 64; }\n\n.igv-center-guide {\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 8px;\n  z-index: 8;\n  display: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  border-left-style: dashed;\n  border-left-width: thin;\n  border-right-style: dashed;\n  border-right-width: thin; }\n\n.igv-center-guide-wide {\n  background-color: rgba(0, 0, 0, 0);\n  border-left-color: rgba(127, 127, 127, 0.51);\n  border-right-color: rgba(127, 127, 127, 0.51); }\n\n.igv-center-guide-thin {\n  left: 50%;\n  width: 1px;\n  background-color: rgba(0, 0, 0, 0);\n  border-left-color: rgba(127, 127, 127, 0.51);\n  border-right-color: rgba(0, 0, 0, 0);\n  /*background-color: rgba(127, 127, 127, 0.51);*/\n  /*border-left-color: rgba(0,0,0,0);*/\n  /*border-right-color: rgba(0,0,0,0);*/ }\n\n.igv-cursor-tracking-guide {\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 1px;\n  z-index: 1;\n  border-left-style: dotted;\n  border-left-width: thin;\n  border-left-color: rgba(127, 127, 127, 0.76);\n  display: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none; }\n\n.igv-clickable {\n  cursor: pointer;\n  background-color: white; }\n\n#color-by-tag {\n  color: #444; }\n\n#color-by-tag:hover,\n#color-by-tag:focus,\n#color-by-tag:active {\n  cursor: pointer;\n  padding-left: 2px;\n  padding-right: 2px;\n  color: white;\n  border-color: #444;\n  border-radius: 2px;\n  border-style: solid;\n  border-width: thin;\n  background-color: #7f7f7f; }\n\n.igv-ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.igv-spinner-container {\n  color: #3f3f3f;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  padding-top: 8px;\n  font-size: 24px;\n  z-index: 512; }\n\n.igv-fa-check-visible {\n  color: inherit;\n  padding-right: 2px; }\n\n.igv-fa-check-hidden {\n  color: transparent;\n  padding-right: 2px; }\n\n.validateTips {\n  border: 1px solid transparent;\n  padding: 0.3em; }\n  .validateTips fieldset {\n    border: 0; }\n\n.igv-spacer-10 {\n  height: 10px;\n  width: 100%;\n  font-size: 0;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  display: block; }\n\n.igv-fa5-spin {\n  -webkit-animation: igv-fa5-spin 2s infinite linear;\n  animation: igv-fa5-spin 2s infinite linear; }\n\n@-webkit-keyframes igv-fa5-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n@keyframes igv-fa5-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n/*# sourceMappingURL=igv.css.map */\n';

    var style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;

    document.head.insertBefore(style, document.head.childNodes[ document.head.childNodes.length - 1 ]);

}

export default embedCSS
