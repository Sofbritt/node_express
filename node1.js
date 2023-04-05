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


// const express = require('express')
// const app = express()

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

// app.get('/', (req, res) => {
//     res.send('home page')
// })

// app.get('/about', (req, res) => {
//     res.redirect('/')
// })

// app.listen(4000, (error) => {
//     console.log(`Listening port ${4000}`);
// })



//////////////  

// const express = require('express')
// const app = express()

// app.get('/:id', (req, res) => {


//     console.log(req.params.id);
//     console.log(req.query);

//     res.send('<h1>Welcome </h1>' + '</br>' + '<h3> URL </h3> ' + req.url + '<br>' + ' <h3>query</h3>' + 'movie:' + req.query.movie + '<br>' + '</hr>' + 'year:' + req.query.year)
//     console.log(req.params);
//     console.log(req.query);


// })


// app.listen(3000, (err) => {
//     console.log(`Listening port ${3000}`);
// })
















///////////////////////// -----    POST -----  ///////////////////////

// const express = require('express')
// const app = express()

// app.use(express.urlencoded())

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/html/index2.html')
// })

// app.post('/sub', (req, res) => {
//     console.log(req.body);
//     res.send('Data posted')

//     // res.redirect('/')
// })




// app.listen(4000, (err) => {
//     err ? console.log(err) : console.log('Listening port 4000');;
// })







////////// ------  POST   Homework ----- ////////

const express = require('express')
const app = express()

app.use(express.urlencoded())


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index2.html')

    app.use(express.static(__dirname + '/static'))



})

app.post('/sub', (req, res) => {
    console.log(req.body);

    if (req.body.userName === '') {
        return res.status(400).send('Write your Name')

    }

    else if (req.body.mail === '') {
        return res.status(400).send('Write your E-mail')
    }

    else {
        res.send('Data posted' + '<br>' + 'user Name:' + req.body.userName + '<br>' + 'Area:' + req.body.select + '<br>' + 'Adress' + req.body.adresses + '<br>' + 'City:' + req.body.city + '<br>' + 'State:' + req.body.state + '<br>' + 'Country:' + req.body.country + '<br>' + 'e-mail:' + req.body.mail)

    }

}



)

app.listen(4000, (err) => {
    err ? console.log(err) : console.log('Listening port 4000');
    console.log('sffjsj');



})



