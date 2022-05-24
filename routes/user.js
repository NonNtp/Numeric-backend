const express = require('express')

const userController = require('../controllers/user')

const router = express.Router()

router.get('/user', userController.getUsers)

router.post('/signup', userController.signUp)
router.post('/login', userController.login)

module.exports = router
