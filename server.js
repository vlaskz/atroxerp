const express = require('express')
const server = express()
const port = process.env.PORT || 3000
const routes = require('./routes')
server.use(express.static('./www/'))
server.use(routes)






server.listen(port, ()=>{
    console.log(`Running wild at ${port}`)
})