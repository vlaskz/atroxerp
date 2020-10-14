const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const { static } = require('express')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('./www/'))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname+'/www/index.html'))
})

app.post('/login',(req, res)=>{
    console.log(`Say hello to ${req.body.username}\nwith password ${req.body.password}`)
    res.sendStatus(200);
})


app.listen(port, ()=>{
    console.log(`Running wild at ${port}`)
})