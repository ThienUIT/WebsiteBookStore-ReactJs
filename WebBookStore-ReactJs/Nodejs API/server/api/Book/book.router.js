const {getBook} = require('./book.controller')
const express = require('express');
const router = express.Router();

router.get('/', getBook);

module.exports = router