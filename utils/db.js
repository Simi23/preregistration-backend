const file = require('./file')
const config = require('../config')

function registerEntry() {
    let data = await file.readJSON('../data/data.json')
    data.push()
}

function removeEntry() {

}

function getAllEntries() {

}

function validateEntry(entry) {
    let validatedEntry = {}
    for(let property in config.properties) {
        if(entry[property.name] == undefined) continue
        let entryText = entry[property.name]
        if(typeof(entry[property.name]) != property.type) continue // Add error response

        if(property.sanitize === true) {
            entryText = sanitizeString(entryText)
        }

        if(property.hasOwnProperty('pattern')) {
            let match = entryText.match(property.pattern)
            if(match == null) continue
            entryText = match[0]
        }
    }
}

function sanitizeString(str){
    str = str.replace(/[^a-z0-9áéíóöőúüűñ \.,_-]/gim,"");
    return str.trim();
}