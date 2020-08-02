const { getOrderItemByID, createOrderItem } = require('./orderitem.services')

const orderItemController = {}

orderItemController.createOrderItem = (req, res) => {

}

orderItemController.getOrderItemByID = (req, res) => {
    const id = parseInt(req.params.id)
    getOrderItemByID(id, (err, results) => {
        if(err){
            console.log(err);
            return
        }
        else {
            return res.status(200).json({
                success: 1,
                data: results[0]
            });
        }
    })
}

module.exports = orderItemController