const express = require('express')

const rootController = require('../controllers/root')

const router = express.Router()

router.post('/post-bisection', rootController.postBisection)

router.get('/get-bisection', rootController.getBisection)

module.exports = router
