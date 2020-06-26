const { getCategory } = require('./category.services')

module.exports = {
    getCategory : (req, res) =>{
        getCategory((err, results) =>{
            if(err){
                console.log(err);
                return  res.json({
                    message: "Database connection error"
                });
            }
            else {
                return res.json(results)
            }
        })
    }
}