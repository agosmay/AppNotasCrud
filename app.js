const express = require('express')
const app = express()
const hbs = require('hbs')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config({path: './env/.env'})

app.set('view engine', 'hbs')
hbs.registerPartials('./views/partials')
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));

const rutas = require('./rutas/route')
app.use(rutas)

app.listen(3000, (req,res)=> {
	console.log('Servidor online')
	
})