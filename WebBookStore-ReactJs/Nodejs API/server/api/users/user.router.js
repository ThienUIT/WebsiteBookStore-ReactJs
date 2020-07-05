const { createUser,getUser, userLogin, getUserByUsername } = require('./user.controller')

const express = require('express');
const router = express.Router();

router.post('/registrations', createUser)
router.get('/', getUser);
// router.get('/', getUserByUsername);
router.post('/login', userLogin )

module.exports = router