const Joi = require("@hapi/joi")

const schema = {
    author: Joi.object({
        name: Joi.string().required(),
        bookImage: Joi.string().max(100).required()
    })
}

module.exports = schema