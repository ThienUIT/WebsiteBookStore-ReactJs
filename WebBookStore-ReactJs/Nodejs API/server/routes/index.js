// const express = require('express');
// const db = require('./../db')

// const router = express.Router();

// router.get('/', async (req, res, next) => {
//     query = `SELECT *FROM author`
//     try{
//         let result = await db.all(query);
//         res.json(result);
//     }
//     catch(e){
//         console.log(e),
//         res.sendStatus(500)
//     }
// });

// router.get('/:id', async (req, res, next) => {
//     query = `SELECT *FROM author WHERE authorID = ? `
//     try {

//         let result = await db.one(query,req.params.id)
//          res.json(result);
         
//     } catch (error) {
        
//         console.log(error),
//         res.sendStatus(500)

//     }

// });



// module.exports = router