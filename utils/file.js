const fs = require('fs')

function readFile(path) {
    return new Promise(async (resolve, reject) => {
        fs.readFile(path, (err, file) => {
            resolve(file.toString())
        })
    })
}

function writeFile(path, file) {
    return new Promise(async (resolve, reject) => {
        fs.writeFile(path, file, err => {
            resolve(true)
        })
    })
}

function readJSON(path) {
    return new Promise(async (resolve, reject) => {
        let file = await readFile(path)
        resolve(JSON.parse(file))
    })
}

function writeJSON(path, data) {
    return new Promise(async (resolve, reject) => {
        let file = await writeFile(path, JSON.stringify(data))
        resolve(file)
    })
}

module.exports = {
    readFile,
    writeFile,
    readJSON,
    writeJSON
}
