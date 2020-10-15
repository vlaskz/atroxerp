const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const format = require('date-fns/format')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('./www/'))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname+'/www/index.html'))
})

app.post('/login_api',(req, res)=>{
    console.log(`Returning a JSON response to ${req.body.usermail}`)
    res.json({
        username: req.body.usermail,
        password: req.body.password,
        date: format(Date.now(), 'dd/MM/yyyy')
    })
})

app.post('/login',(req,res)=>{
    console.log(`Logon attempt from ${req.body.usermail} in ${format(Date.now(), 'dd.MM.yyyy hh:mm:ss')}.`)
    res.sendFile(path.join(__dirname+'/www/dashboard.html'))
})


app.listen(port, ()=>{
    console.log(`Running wild at ${port}`)
})