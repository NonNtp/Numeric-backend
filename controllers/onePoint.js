const HttpError = require('../models/http-error')
const OnePoint = require('../models/onePoint')

const postOnePoint = async (req, res, next) => {
	const { equation, xm } = req.body
	const createOnePoint = new OnePoint({
		equation,
		xm,
	})
	try {
		await createOnePoint.save()
	} catch (err) {
		console.log(err)
	}
	res.json({ onePoint: createOnePoint })
}

const getOnePoint = async (req, res, next) => {
	let OnePointEquation
	try {
		OnePointEquation = await OnePoint.find()
	} catch (err) {
		console.log(err)
	}

	res.json(OnePointEquation)
}

exports.getOnePoint = getOnePoint
exports.postOnePoint = postOnePoint
