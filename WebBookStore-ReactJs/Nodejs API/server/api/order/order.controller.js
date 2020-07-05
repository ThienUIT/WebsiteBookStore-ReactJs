const {getOrder, getOrderById} = require('./order.services');
const { isEmpty } = require('lodash');

const orderController = {}

orderController.getOrder = (req, res) => {
    getOrder((err, results)=>{
        if(err){
            console.log(err);
            return;
        }
        if(isEmpty(results[0])){
            return res.status(200).json({
                success: 0,
                message: 'Record not found'
            })
        }
        else{
            return res.status(200).json({
                success: 1,
                data: results
            });
        }
    })
}

orderController.getOrderById = (req, res) => {
    id = parseInt(req.params.id)
    getOrderById(id, (err, results)=>{
        if(err){
            console.log(err)
            return;
        }
        return res.status(200).json({
            success: 1,
            data: results
        });
    })
}

module.exports = orderController