const { getAuthor, createAuthor } = require('./author.controller')
const express = require('express');
const { createAuthorValidation } = require('../../../validation/authors/author.validation');
const router = express.Router();

router.get('/', getAuthor)
router.post('/', createAuthorValidation ,createAuthor);

module.exports = router