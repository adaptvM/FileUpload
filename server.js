const express = require('express')
const app = new express()
const file_upload = require('./fileUpload')
const port = 8080;


app.get('/', function(req, res) {
    res.send('Don\'t worry, I\'m working as intended ');
})

file_upload();


app.listen(port, () => console.log('I\'m listening on this port known as ' + port))

