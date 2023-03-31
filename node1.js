const express = require('express')
const app = express()

app.use(express.static(__dirname + '/static'))


app.get('/', function (request, response) {
    response.sendFile(__dirname + '/html/index.html')

})

app.use((req, res) => {
    res.sendFile(__dirname + '/html/error.html')

})

app.listen(4000, (err) => {
    console.log('Listening port 4000');


})

