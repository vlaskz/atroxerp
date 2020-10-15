const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const { static } = require('express')
const format = require('date-fns/format')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('./www/'))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname+'/www/index.html'))
})

app.post('/login',(req, res)=>{
    console.log(`Say hello to ${req.body.usermail}\nwith password ${req.body.password}`)
    res.json({
        username: req.body.usermail,
        password: req.body.password,
        date: format(Date.now(), 'dd/MM/yyyy')
    })
    res.sendFile(path.join(__dirname+'/www/dashboard.html'))
})


app.listen(port, ()=>{
    console.log(`Running wild at ${port}`)
})