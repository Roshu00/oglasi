const yup = require('yup');

module.exports = yup.object().shape({
        email: yup.string().required().min(6).email(),
        password: yup.string().required().min(8)
    }
)