const { getAuthor } = require('./author.services')

module.exports = {
    getAuthor: (req, res) =>{
        getAuthor((err, results)=>{
            if(err){
                console.log(err);
                return;
            }
            return  res.json({
                success: 200,
                data: results
            });
        })
    }
}
