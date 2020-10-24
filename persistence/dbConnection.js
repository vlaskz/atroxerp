const {Pool} = require('pg')

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'atroxerp',
    password:'123',
    port:'5432'
})

exports.pool = pool
