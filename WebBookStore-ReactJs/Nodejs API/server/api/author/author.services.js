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
    },
    createAuthor: (data, callback) =>{
        pool.query('INSERT INTO author ( `name`, `authorImage`) VALUES (?,?)',
            [
                data.name,
                data.authorImage
            ],
            (err, results) =>{
                if(err){
                    return callback(err)
                }
                return callback(null, results)
            }
        )
    }
}