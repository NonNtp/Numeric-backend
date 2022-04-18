const HttpError = require('../models/http-error')
const Root = require('../models/root')

const postBisection = async (req, res, next) => {
	const { equation, xl, xr } = req.body
	const createBisection = new Root({
		equation,
		xl,
		xr,
	})
	try {
		await createBisection.save()
	} catch (err) {
		console.log(err)
	}
	res.json({ Bisection: createBisection })
}

const getBisection = async (req, res, next) => {
	let Bisection
	try {
		Bisection = await Root.find()
	} catch (err) {
		console.log(err)
	}

	res.json(Bisection)
}

exports.postBisection = postBisection
exports.getBisection = getBisection
