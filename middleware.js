/////////// Middleware Homework ///////////


const express = require('express')
const app = express()
const fs = require('fs')



app.use((request, response, next) => {

    fs.readFile('count.txt', 'utf8', (err, data) => {
        let count = data + 1
        fs.writeFile('count.txt', `${count}`, (err) => {
            (err) ? console.log(err) : console.log(err);
        })
        next()
    })

    
})


app.listen(3000, (err) => {
    console.log('Listening port 3000');
})