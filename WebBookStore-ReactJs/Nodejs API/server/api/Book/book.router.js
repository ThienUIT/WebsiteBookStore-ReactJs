const {getBook, createBook, updateBook, deleteBook, searchBook, getBookById} = require('./book.controller')
const { updateBookValidation, searchBookValidation } = require("../../../validation/books/book.validation")

const express = require('express');
const router = express.Router();


router.get('/', getBook);
router.get('/:keyWord',  searchBook);
router.get('/bookdetail/:id',getBookById)

router.post('/', createBook);
router.patch('/',updateBookValidation,updateBook);
router.delete('/', deleteBook);

module.exports = router 