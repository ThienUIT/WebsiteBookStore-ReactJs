const pool = require('../../db')

const orderdb = {}

orderdb.getOrder = (callback) =>{
    pool.query(
        'SELECT *FROM `order`',
        (err, reuslts) => {
            if(err){
              return callback(err)
            }
            return callback(null, reuslts)
        }
    )
}

orderdb.getOrderById = (id, callback) => {
    pool.query(
        'SELECT *FROM `order` WHERE accountID = ?',
        [id],
        (err, results) => {
            if(err){
                return callback(err)
            }
            return callback(null, results)
        }
    )
}

orderdb.createOrder = (data ,callback) => {
    pool.query(
        'INSERT INTO `order` (accountID, totalMoney, `status`) VALUES (?,?,?)',
        [data.id, data.total, data.status],
        (err, results) =>{
            if(err){
                return callback(err)
            }
            if(results){
                var insertedID = results.insertId
                return callback(null, results, insertedID)
            }
            // pool.query(
            //     'INSERT INTO `orderitem (orderID, bookID, quantity, total ) VALUES (?,?,?,?)`',
            //     [
            //         insertedID,
            //         book.bookID, 
            //         book.quantity, 
            //         book.subTotal,
            //     ],
            //     (err, reuslts) => {
            //         if(err){
            //             return callback(err)
            //         }
            //         return callback(reuslts)
            //     }
            // )

        }
    )
}


module.exports = orderdb