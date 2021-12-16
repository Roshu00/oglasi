const yup = require('yup');

module.exports = yup.object().shape({
        brand: yup.string().required(),
        model: yup.string(),
        price: yup.number().default(0),
        description: yup.string().default(''),
        imagesPath: yup.string().default(''),
        used: yup.boolean().default(true), 
    }
)