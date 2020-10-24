const {pool, selectFrom} = require('../persistence/dbConnection')
 class Usuario{
    
    getUsuarios(res){
        console.log('[mdlUsuario]: fetching all users')
        pool.query('select * from usuarios order by usr_id asc', (err, result)=>{
            if(err){
                console.log(err)
            }
            console.log(result.rows)
            res = result.rows
        })
    }

}
module.exports = {Usuario}
