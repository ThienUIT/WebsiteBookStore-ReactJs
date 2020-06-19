const pool = require('../../db')

module.exports = {
    getAuthor: callback =>{
        pool.query('SELECT *FROM author',[],
        (err,results)=>{
            if(err)
            {
                return callback(err)
            }
            return callback(null,results)
        }
        )
    }
}