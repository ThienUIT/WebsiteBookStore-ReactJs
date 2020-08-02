
const { getOrder, getOrderById, createOrder } = require('./order.controller');

const express = require('express');
const router = express.Router();


// router.get('/', getOrder);
router.get('/:id', getOrderById)
router.post('/createorder',createOrder)

module.exports = router