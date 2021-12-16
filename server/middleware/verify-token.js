const jwt = require('jsonwebtoken');


module.exports = function (req, res, next) {
    const token = req.cookies.token;
    console.log(token)
    if (!token) {
        return res.status(401).json('accsess denided')
    }
    try {
        const verifyed = jwt.verify(token, process.env.TOKEN_SECRET)
        console.log(verifyed)
        req.user = verifyed
        next()
    } catch (err) {
        console.error(err)
        res.status(400).json('invalid token');
    }
}