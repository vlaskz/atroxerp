const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname+'/www/index.html'))
})

app.listen(port, ()=>{
    console.log(`Running wild at ${port}`)
})