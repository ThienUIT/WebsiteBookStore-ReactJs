const { getCategory } = require('./category.controller')

const express = require('express');

const router = express.Router();

router.get('/', getCategory);

module.exports = router;