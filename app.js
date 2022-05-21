const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

const rootRoute = require('./routes/root')
const onePointRoute = require('./routes/onePoint')
const HttpError = require('./models/http-error')

require('dotenv').config()

const app = express()

mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useUnifiedTopology: false,
	})
	.then(() => {
		console.log('Connect to database success')
	})
	.catch((err) => {
		console.log(err)
	})

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('dev'))

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

const port = process.env.PORT || 8080

app.listen(port, () => {
	console.log(`start server in port ${port}`)
})
