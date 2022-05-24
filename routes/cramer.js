const express = require('express')

const cramerController = require('../controllers/cramer')

const { requireLogin } = require('../controllers/user')

const router = express.Router()

router.get('/get-cramer', requireLogin, cramerController.getCramer)

router.post('/post-cramer', requireLogin, cramerController.postCramer)

module.exports = router
