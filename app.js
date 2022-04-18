const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const rootRoute = require('./routes/root')
const onePointRoute = require('./routes/onePoint')
const HttpError = require('./models/http-error')

const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader(
		'Access-Control-Allow-Methods',
		'OPTIONS, GET, POST, PUT, PATCH, DELETE'
	)
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
	next()
})

app.use('/api', rootRoute)
app.use('/apiOne', onePointRoute)

app.use((req, res, next) => {
	const error = new HttpError('Could not find this route.', 404)
	throw error
})

app.use((error, req, res, next) => {
	if (res.headerSent) {
		return next(error)
	}
	res.status(error.code || 500)
	res.json({ message: error.message || 'An unknown error occurred!' })
})

mongoose
	.connect(
		'mongodb+srv://RedCats:030355118Aa@cluster0.rz1pq.mongodb.net/numeric?retryWrites=true&w=majority'
	)
	.then(() => {
		app.listen(5000)
		console.log('Connected to DataBase Success')
	})
	.catch((err) => {
		console.log(err)
	})
