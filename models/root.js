const mongoose = require('mongoose')

const Schema = mongoose.Schema

const rootEquation = new Schema({
	equation: { type: String, required: true },
	xl: { type: Number, required: true },
	xr: { type: Number, required: true },
})

module.exports = mongoose.model('Root', rootEquation)
