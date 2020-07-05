
const { getOrder, getOrderById } = require('./order.controller');

const express = require('express');
const router = express.Router();


router.get('/', getOrder);
router.get('/:id',getOrderById)


module.exports = router