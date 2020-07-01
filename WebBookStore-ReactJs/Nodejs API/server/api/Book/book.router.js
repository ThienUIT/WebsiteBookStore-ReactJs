const {getBook, createBook, updateBook, deleteBook, searchBook} = require('./book.controller')
const { updateBookValidation, searchBookValidation } = require("../../../validation/books/book.validation")

const express = require('express');
const router = express.Router();


router.get('/', getBook);
router.get('/findbook', searchBookValidation, searchBook);

router.post('/', createBook);
router.patch('/',updateBookValidation,updateBook);
router.delete('/', deleteBook);

module.exports = router 