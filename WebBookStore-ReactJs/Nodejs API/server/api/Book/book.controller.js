const { getBook, createBook, updateBook, deleteBook, searchBook, getBookById } = require('./book.services');
const { isEmpty } = require('lodash')

const bookController = {}

bookController.getBook = (req, res) =>{
    getBook((err, results)=>{
        if(err){
            console.log(err);
            return;
        }
        return res.json(results);
    })
}

bookController.getBookById = (req, res) => {
    Id = parseInt(req.params.id)
    getBookById(Id, (err, results)=>{
        if(err){
            console.log(err);
            return;
        }
        if(isEmpty(results[0])){
            res.status(200).json({
                success:1,
                message:"Record not found"
            });
        }
        else{
                return res.status(200).json({
                    success: 1,
                    data: results[0]
                });
        }
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

bookController.updateBook = (req, res) => {
    const body = req.body
    updateBook(body, (err, results) => {
        if(err){
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "Database connection error"
            });
        }
        getBook((err,results)=>{
            if(err){
                console.log(err);
                return;
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    })
}
bookController.deleteBook = (req, res) =>{
    const body = req.body
    deleteBook(body, (err, results)=>{
        if(err){
            console.log(err);
            return;
        }
        if(!results){
            return  res.json({
                success: 0,
                message: "Record not found"
            });
        }
        return res.json({
            success: 1,
            message: "book deleted successfully"
        });
    })
}

bookController.searchBook = (req, res) => {
    const keyWord = req.params.keyWord
    searchBook(keyWord, (err, results)=>{
        if(err){
            console.log(err)
            return;
        }
        if(isEmpty(results[0])){
            return res.status(200).json({
                success: 0,
                message: "Record not found"
            });
        }
        return res.status(200).json({
            success: 1,
            data: results[0]
        });
    })
}
module.exports = bookController
