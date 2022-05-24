const mongoose = require('mongoose')

const Schema = mongoose.Schema

const EliminationEquation = new Schema({
	a11: { type: Number, required: true },
	a12: { type: Number, required: true },
	a13: { type: Number, required: true },
	a14: { type: Number, required: true },
	a21: { type: Number, required: true },
	a22: { type: Number, required: true },
	a23: { type: Number, required: true },
	a24: { type: Number, required: true },
	a31: { type: Number, required: true },
	a32: { type: Number, required: true },
	a33: { type: Number, required: true },
	a34: { type: Number, required: true },
	a41: { type: Number, required: true },
	a42: { type: Number, required: true },
	a43: { type: Number, required: true },
	a44: { type: Number, required: true },
	b1: { type: Number, required: true },
	b2: { type: Number, required: true },
	b3: { type: Number, required: true },
	b4: { type: Number, required: true },
})

module.exports = mongoose.model('Elimination', EliminationEquation)
