const Elimination = require('../models/elimination')

const postElimination = async (req, res, next) => {
	const {
		a11,
		a12,
		a13,
		a14,
		a21,
		a22,
		a23,
		a24,
		a31,
		a32,
		a33,
		a34,
		a41,
		a42,
		a43,
		a44,
		b1,
		b2,
		b3,
		b4,
	} = req.body
	const createElimination = new Elimination({
		a11,
		a12,
		a13,
		a14,
		a21,
		a22,
		a23,
		a24,
		a31,
		a32,
		a33,
		a34,
		a41,
		a42,
		a43,
		a44,
		b1,
		b2,
		b3,
		b4,
	})
	try {
		await createElimination.save()
	} catch (err) {
		console.log(err)
	}
	res.json({ Elimination: createElimination })
}

const getElimination = async (req, res, next) => {
	let EliminationEquation
	try {
		EliminationEquation = await Elimination.find()
	} catch (err) {
		console.log(err)
	}

	res.json(EliminationEquation)
}

exports.postElimination = postElimination
exports.getElimination = getElimination
