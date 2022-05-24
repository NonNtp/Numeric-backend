const jwt = require('jsonwebtoken')
const User = require('../models/user')
const HttpError = require('../models/http-error')
const expressJWT = require('express-jwt')

const getUsers = async (req, res, next) => {
	let users
	try {
		users = await User.find({})
	} catch (err) {
		const error = new HttpError(
			'Fetching users failed, please try again later.',
			500
		)
		return next(error)
	}
	res.json({ users: users })
}

const signUp = async (req, res, next) => {
	const { email, password } = req.body

	let existingUser
	try {
		existingUser = await User.findOne({ email: email })
	} catch (err) {
		const error = new HttpError(
			'Signing up failed, please try again later.',
			500
		)
		return next(error)
	}

	if (existingUser) {
		const error = new HttpError(
			'User exists already, please login instead.',
			422
		)
		return next(error)
	}

	const createdUser = new User({
		email,
		password,
	})

	try {
		await createdUser.save()
	} catch (err) {
		const error = new HttpError(
			'Signing up failed, please try again later.',
			500
		)
		return next(error)
	}

	res.status(201).json({ user: createdUser })
}

const login = async (req, res, next) => {
	const { email, password } = req.body

	let existingUser

	try {
		existingUser = await User.findOne({ email: email })
	} catch (err) {
		const error = new HttpError(
			'Logging in failed, please try again later.',
			500
		)
		return next(error)
	}

	if (!existingUser) {
		const error = new HttpError(
			'Invalid credentials, could not log you in.',
			401
		)
		return next(error)
	}

	let existPassword

	try {
		existPassword = await User.findOne({ password: password })
	} catch (err) {
		const error = new HttpError(
			'Logging in failed, please try again later.',
			500
		)
		return next(error)
	}

	if (!existPassword) {
		const error = new HttpError(
			'Invalid credentials, could not log you in.',
			401
		)
		return next(error)
	}

	let token
	try {
		token = jwt.sign(
			{
				email: existingUser.email,
				password: existingUser.password,
			},
			process.env.JWT_SECRET,
			{ expiresIn: '365d' }
		)
	} catch (err) {
		const error = new HttpError(
			'Logging in failed, please try again later.',
			500
		)
		return next(error)
	}

	res.json({
		email: existingUser.email,
		password: existingUser.password,
		token: token,
	})
}

const requireLogin = expressJWT({
	secret: process.env.JWT_SECRET || 'admin-super-do',
	algorithms: ['HS256'],
	userProperty: 'auth',
})

exports.getUsers = getUsers
exports.signUp = signUp
exports.login = login
exports.requireLogin = requireLogin
