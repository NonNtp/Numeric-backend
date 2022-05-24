const express = require('express')

const onePointController = require('../controllers/onePoint')

const { requireLogin } = require('../controllers/user')

const router = express.Router()

router.post('/post-onePoint', requireLogin, onePointController.postOnePoint)

router.get('/get-onePoint', requireLogin, onePointController.getOnePoint)

module.exports = router
