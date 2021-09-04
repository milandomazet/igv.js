import {IGVColor, StringUtils} from "../../../node_modules/igv-utils/src/index.js";

const gffNameFields = ["Name", "gene_name", "gene", "gene_id", "alias", "locus", "name"];


function decode(tokens, header) {

    const format = header.format
    if (tokens.length < 9) {
        return undefined;      // Not a valid gff record
    }

    const delim = ('gff3' === format) ? '=' : /\s+/;
    return {
        type: tokens[2],
        chr: tokens[0],
        start: parseInt(tokens[3]) - 1,
        end: parseInt(tokens[4]),
        score: "." === tokens[5] ? 0 : parseFloat(tokens[5]),
        strand: tokens[6],
        phase: "." === tokens[7] ? 0 : parseInt(tokens[7]),
        attributeString: tokens[8],
        delim: delim,
        popupData: popupData
    }
}


/**
 * Decode a single gff record (1 line in file).  Aggregations such as gene models are constructed at a higher level.
 *      ctg123 . mRNA            1050  9000  .  +  .  ID=mRNA00001;Parent=gene00001
 * @param tokens
 * @param ignore
 * @returns {*}
 */
function decodeGFF3(tokens, header) {

    const feature = decode(tokens, header);

    if (!feature) {
        return;
    }

    const attributes = parseAttributeString(feature.attributeString, feature.delim);

    for (let [key, value] of Object.entries(attributes)) {
        const keyLower = key.toLowerCase()
        if ("color" === keyLower || "colour" === keyLower) {
            feature.color = IGVColor.createColorString(value);
        } else {
            try {
                attributes[key] = unescape(value);
            } catch (e) {
                attributes[key] = value;   // Invalid
                console.error(`Malformed gff3 attibute value: ${value}`);
            }
        }
    }

    // Find name (label) property
    if (header.nameField) {
        feature.name = attributes[header.nameField];
    } else {
        for (let nameField of gffNameFields) {
            if (attributes.hasOwnProperty(nameField)) {
                feature.name = attributes[nameField];
                break;
            }
        }
    }

    feature.id = attributes["ID"];
    feature.parent = attributes["Parent"];
    return feature;
}

/**
 * GTF format example:
 NC_000008.11    BestRefSeq    gene    127735434    127742951    .    +    .    gene_id "MYC"; transcript_id ""; db_xref "GeneID:4609"; db_xref "HGNC:HGNC:7553"; db_xref "MIM:190080"; description "MYC proto-oncogene, bHLH transcription factor"; gbkey "Gene"; gene "MYC"; gene_biotype "protein_coding"; gene_synonym "bHLHe39"; gene_synonym "c-Myc"; gene_synonym "MRTL"; gene_synonym "MYCC";
 NC_000008.11    BestRefSeq    transcript    127735434    127742951    .    +    .    gene_id "MYC"; transcript_id "NM_001354870.1"; db_xref "GeneID:4609"; gbkey "mRNA"; gene "MYC"; product "MYC proto-oncogene, bHLH transcription factor, transcript variant 2"; transcript_biotype "mRNA";
 NC_000008.11    BestRefSeq    exon    127735434    127736623    .    +    .    gene_id "MYC"; transcript_id "NM_001354870.1"; db_xref "GeneID:4609"; gene "MYC"; product "MYC proto-oncogene, bHLH transcription factor, transcript variant 2"; transcript_biotype "mRNA"; exon_number "1";
 *
 * @param tokens
 * @param ignore
 * @returns {*}
 */
function decodeGTF(tokens, header) {

    const feature = decode(tokens, header);

    if (!feature) {
        return;
    }

    const attributes = parseAttributeString(feature.attributeString, feature.delim);

    for (let [key, value] of Object.entries(attributes)) {
        const keyLower = key.toLowerCase()
        if ("color" === keyLower || "colour" === keyLower) {
            feature.color = IGVColor.createColorString(value);
        }
    }

    // GTF files specify neither ID nor parent fields, but they can be inferred from common conventions
    if (header.idField) {
        feature.id = attributes[header.idField];
    } else {
        if ("gene" === feature.type) {
            feature.id = attributes["gene_id"];
        } else if ("transcript" === feature.type) {
            feature.id = attributes["transcript_id"];
            feature.parent = attributes["gene_id"];
        } else {
            feature.parent = attributes["transcript_id"];
        }
    }

    // Find name property
    if (header.nameField) {
        feature.name = feature.attributes[header.nameField];
    } else {
        const nameField = feature.type + "_name";        // Common convention
        if (attributes.hasOwnProperty(nameField)) {
            feature.name = attributes[nameField];
        } else {
            for (let nameField of gffNameFields) {
                if (attributes.hasOwnProperty(nameField)) {
                    feature.name = attributes[nameField];
                    break;
                }
            }
        }
    }

    return feature;

}


function parseAttributeString(attributeString, keyValueDelim) {
    // parse 'attributes' string (see column 9 docs in https://github.com/The-Sequence-Ontology/Specifications/blob/master/gff3.md)
    var attributes = {};
    for (let kv of attributeString.split(';')) {
        const t = kv.trim().split(keyValueDelim, 2)
        if (t.length === 2) {
            const key = t[0].trim();
            let value = t[1].trim();
            //Strip off quotes, if any
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.substr(1, value.length - 2);
            }
            attributes[key] = value;
        }
    }
    return attributes
}

function popupData(genomicLocation) {
    const kvs = this.attributeString.split(';')
    const pd = [];
    if (this.name) {
        pd.push({name: 'name:', value: this.name})
    }
    pd.push({name: 'type:', value: this.type})
    for (let kv of kvs) {
        const t = kv.trim().split(this.delim, 2);
        if (t.length === 2 && t[1] !== undefined) {
            const key = t[0].trim();
            if ('name' === key.toLowerCase()) continue;
            let value = t[1].trim();
            //Strip off quotes, if any
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.substr(1, value.length - 2);
            }
            pd.push({name: key + ":", value: value});
        }
    }
    pd.push({
        name: 'position:',
        value: `${this.chr}:${StringUtils.numberFormatter(this.start + 1)}-${StringUtils.numberFormatter(this.end)}`
    })
    return pd;
}

export {decodeGFF3, decodeGTF, parseAttributeString, gffNameFields};



