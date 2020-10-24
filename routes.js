const express = require('express')
const router = express.Router();

function timeLog(req, res, next){
    console.log(`Accessed at: ${Date.now()}`)
    next();
}

router.use(timeLog)

router.get('/',(req,res)=>{
    res.sendStatus(200);
})