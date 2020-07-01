const Joi = require("@hapi/joi")

const schema =  {
    book: Joi.object({
        title: Joi.string().required(),
        authorID: Joi.number().required(),
        categoryID: Joi.number().required(),
        price: Joi.number().required(),
        describe: Joi.string().required(),
        numberOfPages: Joi.required(),
        bookImage: Joi.required(),
        bookID: Joi.required()
    }),
    searchBook: Joi.object({
        keyWord: Joi.string().required()
    })
}

module.exports = schema