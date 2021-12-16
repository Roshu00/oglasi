const loginService = require('../service/login');

class loginController {
    async createNewUser (req, res) {
        try {
            const token = await loginService.createNewUser(req.body);
            res.cookie('token', token, {httpOnly : true})
            res.json({ token })
        } catch (err) {
            console.log(err)
            res.status(400).json('unable to register')
        }
    }

    async loginUser (req, res) {
        try {
            const serviceResponse = await loginService.loginUser(req.body);
            if (!serviceResponse.token) {
                throw Error
            } else {
                res.cookie('token', serviceResponse.token, { httpOnly: true })
                
                res.json(serviceResponse)
            }
        } catch (err) {
            console.error(err)
            res.status(400).json('whrong credentials');
        }
    }

    logOut (req, res) {
        try {
            console.log('cookie deleted')
            res.cookie('token', '', { maxAge: Date.now() })
            res.status(200).json('logedOUt')
        } catch (err) {
            console.error(err)
            res.status(400).json('unable to logout')
        }
    }
}

module.exports = new loginController()