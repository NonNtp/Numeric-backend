const mongoose = require('mongoose')

const Schema = mongoose.Schema

const onePointEquation = new Schema({
	equation: { type: String, required: true },
	xm: { type: Number, required: true },
})

module.exports = mongoose.model('OnePoint', onePointEquation)
