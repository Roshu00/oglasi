const { v4: uuidv4 } = require('uuid');
const Login = require('../db/models/login');
const dbSetup = require('../db/db-setup');

dbSetup()

class loginDAO {
    async createNewUser (email, password) {
        const {id} = await Login.query().insert({
            id: uuidv4(),
            email,
            password
        }
        ).returning('id')

        return id
    }

    async loginUser (email) {
            const user = await Login.query().select('*').where('email', email)
            if (user) {
                return user[0]
            } else {
                return Null
            }
    }
}
module.exports = new loginDAO();