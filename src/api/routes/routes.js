const express =  require('express')
const myRoutes = express.Router()
const generateRandomProds = require('../class/faker')
const listProd = generateRandomProds(5)

myRoutes.get('/', (req, res) => {res.render('index');})

myRoutes.get('/api/productos-test', (req, res) => {res.render('fakeProd', {listproducts: listProd});})

module.exports = myRoutes