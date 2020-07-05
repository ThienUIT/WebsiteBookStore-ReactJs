const express = require('express');
const { getOrderItemByID, createOrderItem } = require('./orderitem.controller');
const router = express.Router();

router.get('/', getOrderItemByID);
router.post('/', createOrderItem)

module.exports = router