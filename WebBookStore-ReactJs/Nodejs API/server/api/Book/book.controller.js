const { getBook } = require('./book.services')

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

module.exports = bookController
