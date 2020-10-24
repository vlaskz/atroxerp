const express = require('express')
const router = express.Router();
const path = require('path')
const bodyParser = require('body-parser')
const format = require('date-fns/format')
const { pool } = require('./persistence/dbConnection');
const { Usuario }= require('./Usuario/mdlUsuario');
router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json())


router.use((req,res,next)=>{
    console.log(`[ROUTER]: Request time process:${Date.now()}`)
    next()
})




router.get('/allusers',(req, res)=>{
    console.log(`[ROUTER]: GET /allusers `)
    new Usuario().getUsuarios()
    console.log()
    res.sendStatus(200)
})
    
router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname+'/www/views/login.html'))
    console.log(`[ROUTER] GET / `)
})




router.post('/login',(req,res)=>{
    console.log(`Logon attempt from ${req.body.usermail} in ${format(Date.now(), 'dd.MM.yyyy hh:mm:ss')}.`)
    
    pool.query(`select * from usuarios where '${req.body.usermail}' = usr_login`,(err, res)=>{
        if(err){
            console.log(err)
        }else{
            console.log(res.rows[0])
        }
    })
      
    res.sendFile(path.join(__dirname+'/www/views/login.html'))
})

module.exports = router