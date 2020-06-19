const { getAuthor } = require('./author.controller')
const express = require('express');
const router = express.Router();

router.get('/', getAuthor)

module.exports = router