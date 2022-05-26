const express = require('express')
const app = express()
const port = 3100
const mongoose = require('mongoose');

app.use(express.static(__dirname + '/public' ));



app.get('/',((req, res) => {
    res.sendFile(__dirname+'/pages/index.html')
}))

app.get('/sign',((req, res) => {
    res.sendFile(__dirname+'/pages/sign.html')
}))

app.get('/about',((req, res) => {
    res.sendFile(__dirname+'/pages/about.html')
}))

app.get('/hotel',((req, res) => {
    res.sendFile(__dirname+'/pages/hotel.html')
}))

app.get('/weather',((req, res) => {
    res.sendFile(__dirname+'/pages/weather.html')
}))

app.get('/shop',((req, res) => {
    res.sendFile(__dirname+'/pages/shop.html')
}))
app.get('/culture',((req, res) => {
    res.sendFile(__dirname+'/pages/culture.html')
}))

app.listen(port, () => {
     console.log(`App listening at http://localhost:${port}`)
 }) 

// async function start() {
//     try {
//       await mongoose.connect(
//         'mongodb+srv://fvrblooom:fvrbloom@cluster0.tlvjr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
//         {
//           useNewUrlParser: true          
//         }
//       )
//       app.listen(port, () => {
//         console.log('Server has been started...')
//       })
//     } catch (e) {
//       console.log(e)
//     }
//   }
  
// start()
  