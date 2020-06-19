const pool = require('../../db')

const bookdb = {}

bookdb.getBook = callback =>{
    pool.query('CALL `USP_Get_Book`()',[],(err, results)=>{
        if(err){
            return callback(err)
        }
        return callback(null, results[0])
    })
}

module.exports = bookdb
