const { author } = require("./author.schema")

module.exports = {
    createAuthorValidation: async (req, res, next) =>{
        const value = await author.validate(req.body)
        if(value.error){
             res.json({
                 success: 0,
                 message: value.error.message
             });
        }
        else {
            next();
        }
    }
}