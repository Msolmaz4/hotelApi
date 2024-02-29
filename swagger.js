const swaggerAutogen = require('swagger-autogen')();

require('dotenv').config()
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000
const packageJson = require('./package.json')

const document = {
	info: {
		version: packageJson.version,
		title: packageJson.title,
		description: packageJson.description,
		termsOfService: "http://efsane.com/#",
		contact: { name: packageJson.author, email: "msolmaz83@gmail.com" },
		license: { name: packageJson.license, },
	},
	host: `${HOST}:${PORT}`,
	basePath: '/',
	schemes: ['http', 'https'],
	consumes: ["application/json"],
	produces: ["application/json"],
	securityDefinitions: {
	
		Bearer: {
			type: 'apiKey',
			in: 'header',
			name: 'Authorization',
			description: 'JWT Authentication * Example: <b>Bearer ...accessToken...</b>'
		},
	},
	security: [ { Bearer: [] }],
	definitions: {
		// Models:
		"User": require('./src/models/user').schema.obj,
	}
}

const routes = ['./index.js']
const outputFile = './src/db/swagger.json'

// Create JSON file:
swaggerAutogen(outputFile, routes, document)


//https://swagger-autogen.github.io/docs/getting-started/quick-start/