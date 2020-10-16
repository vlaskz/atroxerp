const { Pool} = require('pg')

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'atroxerp',
    password:'123',
    port:'5432'
})

pool.query('select * from empresas', (err, res)=>{
    console.log(err, res)
    pool.end();
})