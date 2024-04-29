const express = require('express')
const app = express()
const mongoose = require('mongoose');
const product = require('./models/product.model')
const ProductRoute = require('./routes/product.route')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('./api/products', ProductRoute)

app.get('/', function (req, res) {
  res.send('Hello World 2')
})


mongoose.connect("mongodb+srv://tung200456789:s0ir3qy6G9GYeSYl@nodeapi.son2cme.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Nodeapi")
.then(()=> {
    console.log('Connect to MongoDB')
    app.listen(3000, ()=> {
        console.log('Server is running')
    })
}).catch((err) => console.log(err))