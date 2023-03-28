const express = require('express')
const app = express()

app.use(express.static(__dirname + '/static'))


app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html')

})

app.use((req,res)=>{
    res.sendFile(__dirname + '/error.html')
   
})

app.listen(3000, (err) => {
    console.log('Listening port 3000');

    
})

