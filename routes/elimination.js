const express = require('express')

const EliminationController = require('../controllers/elimination')

const { requireLogin } = require('../controllers/user')

const router = express.Router()

router.get(
	'/get-elimination',
	requireLogin,
	EliminationController.getElimination
)

router.post(
	'/post-elimination',
	requireLogin,
	EliminationController.postElimination
)

module.exports = router
