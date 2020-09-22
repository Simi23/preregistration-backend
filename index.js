const Config = require('./config')
const app = require('express')()
const bodyParser = require('body-parser')
const db = require('./utils/db')

app.post('/sendEntry', bodyParser.json(), (req, res) => {
    db.registerEntry(req.body)
    res.status(200).send()
})

app.listen(3000)
