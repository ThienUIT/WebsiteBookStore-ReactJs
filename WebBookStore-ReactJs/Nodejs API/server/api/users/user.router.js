const { createUser,getUser, userLogin, getUserByUsername, updateUser } = require('./user.controller')

const express = require('express');
const router = express.Router();

router.post('/registrations', createUser)
router.get('/', getUser);
router.get('/:name', getUserByUsername);
router.post('/login', userLogin );
router.patch('/updateuser', updateUser);

module.exports = router