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

// const express = require('express')
// const app = express()

// app.use(express.urlencoded())


// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/html/index2.html')

//     app.use(express.static(__dirname + '/static'))



// })

// app.post('/sub', (req, res) => {
//     console.log(req.body);

//     if (req.body.userName === '') {
//         return res.status(400).send('Write your Name')

//     }

//     else if (req.body.mail === '') {
//         return res.status(400).send('Write your E-mail')
//     }

//     else {
//         res.send('Data posted' + '<br>' + 'user Name:' + req.body.userName + '<br>' + 'Area:' + req.body.select + '<br>' + 'Adress' + req.body.adresses + '<br>' + 'City:' + req.body.city + '<br>' + 'State:' + req.body.state + '<br>' + 'Country:' + req.body.country + '<br>' + 'e-mail:' + req.body.mail)

//     }

// }



// )

// app.listen(4000, (err) => {
//     err ? console.log(err) : console.log('Listening port 4000');
//     console.log('sffjsj');



// })






////////////////////////////////

const express = require('express')
const app = express()
app.use(express.json())

app.post('/images', (request, response) => {
    console.log(request.body);
    // if (!request.body) return responce.sendStatus(400)
     
    response.json(request.body)
    
})

app.get('/', (request, response) => {
    response.json([{id:1, url:'https://i.guim.co.uk/img/media/d5b563bef60c06a22dc65a18c391f63ff42549e6/0_205_4288_2573/master/4288.jpg?width=1200&quality=85&auto=format&fit=max&s=f69dafe4bb0bc828c5e07298240f1d3a'},{id:2, url:'https://image.shutterstock.com/image-photo/cosmos-flowers-beautiful-garden-260nw-1569283954.jpg'},{id:3,url:'https://i.pinimg.com/474x/12/d2/30/12d230fab7f17bda80a6b1d9899e7b93.jpg'},{id:4,url:'https://i.pinimg.com/474x/12/d2/30/12d230fab7f17bda80a6b1d9899e7b93.jpg'},{id:5,url:'https://i.pinimg.com/474x/df/f6/3c/dff63cfe150341f00837941cd15a9a7d--memes.jpg'},{id:6,url:'https://media.cnn.com/api/v1/images/stellar/prod/210316134609-01-wisdom-project-spring.jpg?q=w_4000,h_2250,x_0,y_0,c_fill'},{id:7,url:'https://htmlcolorcodes.com/assets/images/colors/baby-blue-color-solid-background-1920x1080.png'},{id:8,url:'https://www.kindpng.com/picc/m/81-816202_blue-star-sparkle-png-transparent-png.png'},{id:9,url:'https://www.creativefabrica.com/wp-content/uploads/2021/09/30/Yellow-sparkles-symbols-vector-The-set-Graphics-18095496-1-580x387.jpg'},{id:10,url:'https://www.creativefabrica.com/wp-content/uploads/2021/09/30/Yellow-sparkles-symbols-vector-The-set-Graphics-18095496-1-580x387.jpg'},{id:11,url:'https://image.pngaaa.com/145/727145-middle.png'},{id:12,url:'https://cdn.shopify.com/s/files/1/0423/2629/4692/products/Y2KDELUXECOVERCHROME_2048x.png?v=1650898588'},{id:13,url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOG2Ju3tVhqeH-kdmywErOKFAyhDQmSmGkMmV7P6iD5jP3g5nXlVSw0s80nSLlWpAG-c&usqp=CAU'},{id:14,url:'https://png.pngitem.com/pimgs/s/118-1187152_transparent-glowing-star-clipart-blue-transparent-background-stars.png'},{id:15,url:'https://png.pngitem.com/pimgs/s/625-6250367_fanmade-cutie-mark-stars-by-durpy-dallas-stars.png'},{id:16,url:'https://p.kindpng.com/picc/s/116-1168531_star-red-star-five-pointed-png-free-photo.png'},{id:17,url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbGUMZ7DMeY5h864tz9euU3ibOZSbHdISvA&usqp=CAU'},{id:18,url:'https://i.pinimg.com/736x/d8/bd/e4/d8bde4e31993a1094865e07f17d0aa91.jpg'},{id:19,url:'https://dejpknyizje2n.cloudfront.net/marketplace/products/super-star-text-y2k-aesthetic-sticker-36806-9b25dc.png'},{id:20,url:'https://i.etsystatic.com/17330034/r/il/0df12c/2424157158/il_570xN.2424157158_gm5e.jpg'},{id:21,url:'https://i.pinimg.com/originals/62/32/c0/6232c0297b746b4c4029f814e6c2d779.png'},{id:22,url:'https://icon2.cleanpng.com/20180318/gyq/kisspng-star-yellow-clip-art-rising-star-cliparts-5aadec4cd3b379.3465608815213476608671.jpg'},{id:23,url:'https://www.vhv.rs/dpng/d/361-3617406_totally-spies-gadgets-compowder-compoudrier-totally-spies-hd.png'},{id:24,url:'https://i.pinimg.com/originals/c0/c8/37/c0c83763dd8693c8161d3610d9c9d0d0.jpg'},{id:25,url:'https://www.onlygfx.com/wp-content/uploads/2021/02/6-pixel-heart-6.png'},{id:26,url:'https://pngimg.com/uploads/butterfly/butterfly_PNG1016.png'},{id:27,url:'https://thumbs.dreamstime.com/b/tropical-bright-orange-butterfly-23288431.jpg'},{id:28,url:'https://t3.ftcdn.net/jpg/00/72/77/52/360_F_72775246_q9HAv97MGxOIp5rPojwNfFvZIB4Fq10X.jpg'},{id:29,url:'https://t3.ftcdn.net/jpg/00/72/77/52/360_F_72775262_w5lx6hYnkkvmy317UZWgodnccyp270Cu.jpg'},{id:30,url:'https://images.immediate.co.uk/production/volatile/sites/4/2022/09/Chimaera-Birdwing-4cee20f.jpg'},{id:31,url:'https://a-z-animals.com/media/2021/08/wallacegoldenbirdwing-1024x683.jpg'},{id:32,url:'https://i.pinimg.com/originals/3a/01/6b/3a016b36807f47c5877ba19dbeef9409.jpg'},{id:33,url:'https://media.istockphoto.com/id/1314812112/vector/sunset-sky-cartoon-summer-sunrise-with-pink-clouds-and-sunshine-evening-cloudy-heaven.jpg?s=612x612&w=0&k=20&c=5ICXJ0K3Uu06L9OpqINVu4bUXS3UcBWJHP3Ut8MqDWU='},{id:34,url:'https://static.vecteezy.com/system/resources/previews/014/992/117/original/sunset-cartoon-sky-with-clouds-sun-sunlight-background-design-free-vector.jpg'},{id:35,url:'https://static.vecteezy.com/system/resources/previews/006/823/044/original/beach-sunset-cartoon-scenery-background-free-vector.jpg'},{id:36,url:'https://thumbs.dreamstime.com/b/vector-blue-cloudy-sky-good-weather-vector-blue-cloudy-sky-good-weather-anime-cartoon-style-background-design-171922581.jpg'},{id:37,url:'https://t3.ftcdn.net/jpg/02/67/83/92/360_F_267839295_jVbzpVskpRpnPaq3xLFjjX9gYjNRocxN.jpg'},{id:38,url:'https://st4.depositphotos.com/17054972/19881/v/450/depositphotos_198812272-stock-illustration-rainy-sky-background-cartoon-style.jpg'},{id:39,url:'https://assetstorev1-prd-cdn.unity3d.com/key-image/08b03926-ee60-4df9-8aca-8d2305671cfd.png'},{id:40,url:'https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/e814cae4-4f2d-4c03-8d13-b33e4a2ef556_scaled.jpg'},{id:41,url:'https://t4.ftcdn.net/jpg/02/64/27/01/360_F_264270105_MZ58OXpvpfgdWiQALjxEvA0DLbbecZqo.jpg'},{id:42,url:'https://t3.ftcdn.net/jpg/01/64/24/58/360_F_164245821_H9rtGnVhkXt5QLbcJuj1FxIYd8E3EPmM.jpg'},{id:43,url:'https://t4.ftcdn.net/jpg/01/83/24/75/360_F_183247506_ea3yUkLXA5rOVxVtYb06XfE0asooBKog.jpg'},{id:44,url:'https://t3.ftcdn.net/jpg/02/18/28/32/360_F_218283211_iubz6DH31TeouirTV5eTmHti0cTnfN1E.jpg'},{id:45,url:'https://t4.ftcdn.net/jpg/02/73/15/81/360_F_273158104_9QYsQFuWW9SLyVORx0YjIPpTjMvnWiQV.jpg'},{id:46,url:'https://img.freepik.com/free-vector/empty-nature-beach-ocean-coastal-landscape_1308-32585.jpg',title:'Beach2'},{id:47,url:'https://media.istockphoto.com/id/1036313300/video/animation-of-tropical-landscape.jpg?s=640x640&k=20&c=0T5qnK_3WUb5etpQFY91JHN1ZQ3-12eDflZtrsoN1ws=',title:'Beach'},{id:48,url:'https://i.pinimg.com/474x/18/84/50/188450f82ee2cdb9002d6fa56e2775c2.jpg',title:'Daria3'},{id:49,url:'https://i.pinimg.com/736x/1d/f4/ca/1df4ca6cee2c243263e423c86ea8df91--daria.jpg',title:'Daria2'},{id:50,url:'https://pbs.twimg.com/media/B9s-SeYIgAEdU5A.jpg',title:'Daria'}])

})

app.listen(3000,()=>{
    console.log('listening port 3000');
})