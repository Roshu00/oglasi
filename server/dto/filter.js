const yup = require('yup');

module.exports = yup.object().shape({
        brand: yup.string().default('sve'),
        model: yup.string().default('sve'),
        lowPrice: yup.string().default('0'),
        highPrice: yup.string().default('100000')
    }
)