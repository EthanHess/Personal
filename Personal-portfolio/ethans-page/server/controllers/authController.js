const bcrypt = require('bcrypt');
// const session = require('express-session')
const saltRounds = 12;

function makeUser(user) {

}

module.exports = {
    login: (req, res) => {
        const db = req.app.get('db')
        const { username, password } = req.body
        db.user_exists({username: username}).then(user => {
            if (user.length) {

            } else {

            }
        })
    }
}