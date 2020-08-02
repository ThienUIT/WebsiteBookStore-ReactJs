const  pool  = require('../../db')

const orderItemDb = {}

orderItemDb.createOrderItem = (data, orderID ,callback) => {
    pool.query(
        'INSERT INTO orderitem (orderID, bookID, quantity, total ) VALUES (?,?,?,?)',
        [
            orderID,
            data.bookID,
            data.quantity,
            data.price*data.quantity
        ],
        (err, results) => {
            if(err){
                return callback(err);
            }
            return callback(null, results)
        }

    )
}

orderItemDb.getOrderItemByID = (id,callback) => {
    pool.query(
        'CALL USP_GetOrderDetail(?)',
        [id],
        (err, results) => {
            if(err){
                return callback(err)
            }
            return callback(null, results)
        }
    )
}

module.exports = orderItemDb