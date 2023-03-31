// const express = require('express')
// const app = express()

// app.use(express.static(__dirname + '/static'))


// app.get('/', function (request, response) {
//     response.sendFile(__dirname + '/html/index.html')

// })

// app.use((req, res) => {
//     res.sendFile(__dirname + '/html/error.html')

// })

// app.listen(4000, (err) => {
//     console.log('Listening port 4000');


// })




/////////////////////////


const express = require('express')
const app = express()

// app.use((req, res, next) => {
//     if (req.url === '/') {
//         return res.send('not allowed')
//     }
//     next()
// })

// app.get('/:id',(req,res)=>{
//     console.log(req.params);
//     console.log(req.query);
//     console.log(req.url);
//     res.send('hello')
// })

// 
// app.get('/', (req, res) => {
//     console.log(req.params);
//     res.send('hello')
// })

app.get('/', (req, res) => {
    res.send('home page')
})

app.get('/about', (req, res) => {
    res.redirect('/')
})

app.listen(4000, (error) => {
    console.log(`Listening port ${4000}`);
})