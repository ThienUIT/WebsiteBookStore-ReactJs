// const express = require('express');
// const db = require('./../db')

// const router = express.Router();

// router.get('/', async (req, res, next) => {
//     query = `SELECT *FROM category`
//     try{
//         let result = await db.all(query);
//         res.json(result);
//     }
//     catch(err){
//         console.log(err),
//         res.sendStatus(500)
//     }
// });

// router.get('/:id', async (req, res, netx) => {

//     query = `SELECT *FROM category WHERE categoryID = ? `
//     try{
//         let result = await db.one(query,req.params.id)
//         res.json(result);
//     }
//     catch(err){
//         console.log(err)
//         res.sendStatus(500)
//     }

// });

// module.exports = router