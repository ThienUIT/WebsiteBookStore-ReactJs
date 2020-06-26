const { getBook, createBook } = require('./book.services')

const bookController = {}

bookController.getBook = (req, res) =>{
    getBook((err, results)=>{
        if(err){
            console.log(err);
            return;
        }
        return  res.json(results);
    })
}

bookController.createBook = (req, res) =>{
    const body = req.body
    createBook(body, (err, results)=>{
        if(err){
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "Database connection error"
            });
        }
        return res.status(200).json({
            success: 1,
            data: results
        });
    })
}

module.exports = bookController
