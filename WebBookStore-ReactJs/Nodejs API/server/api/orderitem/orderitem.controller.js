const { getOrderItemByID, createOrderItem } = require('./orderitem.services')

const orderItemController = {}

orderItemController.createOrderItem = (req, res) => {

}

orderItemController.getOrderItemByID = (req, res) => {
    const body = req.body
    getOrderItemByID(body, (err, results) => {
        if(err){
            console.log(err);
            return
        }
        else {
            return res.status(200).json({
                success: 1,
                data: results
            });
        }
    })
}

module.exports = orderItemController