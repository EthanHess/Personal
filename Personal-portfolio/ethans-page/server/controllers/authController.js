const bcrypt = require('bcrypt')
// const session = require('express-session')
const saltRounds = 12

//SQL database not set up yet so may be subject to change
function makeUser(user) {
    var theUser = {
        id: user.id,
        username: user.username,
        bio: user.bio,
        email: user.email,
        img: user.img,
        name: user.name || user.username, // in case they did not set a name
        socialList: user.social_list,
    }
    return theUser
}

module.exports = {
    login: (req, res) => {
        const db = req.app.get('db')
        const { username, password } = req.body
        db.find_user({ username: username }).then(user => { //By numerical ID instead? 
            if (user.length) {
                bcrypt.compare(password, user[0].password).then(passwordsMatch => {
                    if (passwordsMatch) {
                        const theUser = makeUser(user[0])
                        req.session.user = theUser
                        res.json(theUser)
                    } else {
                        res.json({ message: 'Invalid username or password'})
                    }
                })
            } else {
                res.json({ message: 'We cannnot find this user in the database, please create an account'})
            }
        })
    },
    //
    register: (req, res) => {
        const db = req.app.get('db')
        const { username, password, email } =  req.body
        db.check_username({
            username: username
        }).then(users => {
            if (users.length) {
                res.json({ message: "Username is unavailable"})
            } else {
                bcrypt.hash(password, saltRounds).then(hash => {
                    db.create_new_user({
                        username: username,
                        password: hash,
                        email: email
                    }).then(user => {
                        const theUser = makeUser(user[0])
                        req.session.user = user
                        res.status(200).json(theUser)
                    }).catch(error => {
                        console.log('error creating user', error)
                    })
                })
            }
        })
    }, 
    //
    getSession: (req, res) => {
        const { session } = req
        res.status(200).send( session.user || {})
    },
    //
    logoutUser: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}