const file = require('./file')
const config = require('../config')

async function registerEntry(entry) {
    let data = await file.readJSON('./data/data.json')
    let newEntry = validateEntry(entry)
    newEntry.id = uuidv4()
    newEntry.date = Math.floor(Date.now() / 1000)

    //data.push(newEntry)
    console.log(newEntry)
}

function removeEntry() {

}

function getAllEntries() {

}

function validateEntry(entry) {
    let validatedEntry = {}
    for(let i = 0; i < config.properties.length; i++) {
        const property = config.properties[i]
        
        if(entry[property.name] == undefined) {
            console.log(`Error: property name \'${property.name}\' not found`)
            continue
        }
        let entryText = entry[property.name]
        if(typeof(entry[property.name]) != property.type) {
            console.log('Error: property type not matching')
            continue // Add error response  
        }

        if(property.sanitize === true) {
            entryText = sanitizeString(entryText)
        }

        if(property.hasOwnProperty('pattern')) {
            let match = entryText.match(property.pattern)
            if(match == null){
                console.log('Error: failed on matching pattern')
                continue
            }
            entryText = match[0]
        }
        validatedEntry[property.name] = entryText
    }
    return validatedEntry
}

module.exports = {
    registerEntry,
    removeEntry,
    getAllEntries
}

function sanitizeString(str){
    str = str.replace(/[^a-z0-9áéíóöőúüűñ \.,_-]/gim,"");
    return str.trim();
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}
