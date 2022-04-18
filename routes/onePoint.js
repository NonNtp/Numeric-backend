const express = require('express')

const onePointController = require('../controllers/onePoint')

const router = express.Router()

router.post('/post-onePoint', onePointController.postOnePoint)

router.get('/get-onePoint', onePointController.getOnePoint)

module.exports = router
