const AuthController = require('./controllers/Auth')

module.exports = (app) => {
    app.post('/register',
        AuthController.register)
}