const express = require('express')
const cors = require('cors')
const config = require('config')
const mongoose = require('mongoose')
require('./db')

const app = express()

app.use(express())
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('OOK')
})

app.get('*',(req,res)=>{
    res.send('Bad_request')
})

port = config.get('port') || 8080

mongoose.connection.once('open',()=>{
    app.listen(port,()=>{
        console.log(`Server runinng on port ${port}`)
    })
    console.log('DB connected')
})

