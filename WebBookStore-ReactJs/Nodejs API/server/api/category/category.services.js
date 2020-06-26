const pool = require('../../db/')

module.exports = {
    getCategory : callback =>{
        pool.query(
            `SELECT *FROM category`,
            [],
            (err, results, fields) =>{
                if(err){
                    return callback(err)
                }
                return callback(null, results)
            }
        );
    }
}