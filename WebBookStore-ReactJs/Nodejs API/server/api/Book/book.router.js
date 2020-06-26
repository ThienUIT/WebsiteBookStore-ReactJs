const {getBook, createBook} = require('./book.controller')
const express = require('express');
const router = express.Router();

router.get('/', getBook);
router.post('/', createBook);

module.exports = router