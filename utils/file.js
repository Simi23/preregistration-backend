const fs = require('fs')

module.exports = {
    readFile,
    writeFile,
    readJSON,
    writeJSON
}

function readFile(path) {
    return new Promise((resolve, reject), () => {
        fs.readFile(path, (err, file) => {
            resolve(file)
        })
    })
}

function writeFile(path, file) {
    return new Promise((resolve, reject), () => {
        fs.writeFile(path, file, err => {
            resolve(true)
        })
    })
}

function readJSON(path) {
    return new Promise((resolve, reject), () => {
        resolve(JSON.parse(await readFile(path)))
    })
}

function writeJSON(path, data) {
    return new Promise((resolve, reject), () => {
        resolve(await writeFile(path, JSON.stringify(data)))
    })
}