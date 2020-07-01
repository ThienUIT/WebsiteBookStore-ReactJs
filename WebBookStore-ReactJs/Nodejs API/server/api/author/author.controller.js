const { getAuthor, createAuthor } = require('./author.services')

module.exports = {
    getAuthor: (req, res) =>{
        getAuthor((err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            return  res.json(results);
        })
    },
    createAuthor: (req, res) => {
        const body = req.body
        createAuthor(body,(err, results) => {
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            else {
                return res.status(201).json({
                    success: 1,
                    affectedRows: results.affectedRows
                });
            }
        })
    }
}
