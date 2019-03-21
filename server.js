const express = require('express')
const router = require('./Router/route')
const port = 8080;

const app = new express()

app.use(express.json())
app.use('/', router)

app.get('/', function(req, res) {
    res.send('Don\'t worry, I\'m working as intended');
})


app.listen(port, () => console.log('I\'m listening on this port known as ' + port))

