const {getOrder, getOrderById, createOrder} = require('./order.services');
const { isEmpty } = require('lodash');
const { createOrderItem } = require('../orderitem/orderitem.services');

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
    const id = parseInt(req.params.id)
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

orderController.createOrder = (req, res) => {
    var {userID, total, status} = req.body;
    var data = {
        id: userID,
        total: total,
        status: status
    }
    const book = req.body.data
    createOrder(data, (err, results, insertedID)=>{
        if(err){
            console.log(err);
            return;
        }
        if(results){
            for(let i = 0; i < book.length; i++){
                var bookData = {
                    bookID: book[i].book.bookID,
                    quantity: book[i].quantity,
                    price: book[i].book.price
                }
                createOrderItem(bookData, insertedID, (err, results)=>{
                    if(err){
                        console.log(err);
                        return;
                    }  
                   
                })
            }
            return res.json({
                success: 1,
                data: results
            });
        }
    })
}

module.exports = orderController