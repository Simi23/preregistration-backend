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
        
    }
}