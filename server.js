const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes')
app.use(express.static('./www/'))
app.use(routes)


app.listen(port, ()=>{
    console.log(`Running wild at ${port}`)
})