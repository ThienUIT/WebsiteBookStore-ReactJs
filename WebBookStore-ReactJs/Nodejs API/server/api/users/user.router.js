const { createUser,getUser, userLogin } = require('./user.controller')

const express = require('express');
const router = express.Router();

router.post('/registrations', createUser)
router.get('/', getUser);
router.post('/login', userLogin )

module.exports = router