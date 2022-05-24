const Cramer = require('../models/cramer')

const postCramer = async (req, res, next) => {
	const { A, B } = req.body
	const createCramer = new Cramer({
		A,
		B,
	})
	try {
		await createCramer.save()
	} catch (err) {
		console.log(err)
	}
	res.json({ cramer: createCramer })
}

const getCramer = async (req, res, next) => {
	let CramerEquation
	try {
		CramerEquation = await Cramer.find()
	} catch (err) {
		console.log(err)
	}

	res.json(CramerEquation)
}

exports.postCramer = postCramer
exports.getCramer = getCramer
