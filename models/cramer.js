const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cramerEquation = new Schema({
	A: { type: Array, required: true },
	B: { type: Array, required: true },
})

module.exports = mongoose.model('Cramer', cramerEquation)
