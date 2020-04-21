const express = require('express')
const router = express.Router()
const { productsPassRow } = require('../services/comonFunc')
const { uuid } = require('uuidv4')
const Product = require('../models/product')

router.get('/', async (req, res, next) => {
  try {
    const products = (await Product.find({})) || []
    let htmlProducts = productsPassRow(products)
    return res.render('product', {
      layout: 'main',
      template: 'home-template',
      htmlProducts
    })
  } catch (error) {
    res.send(error.toString())
  }
})
router.post('/create', async (req, res, next) => {
  try {
    const newPro = new Product({
      _id: uuid(),
      ...req.body
    })
    await newPro.save()
  } catch (error) {
    res.send(error.toString())
  }
  return res.redirect('http://localhost:8080/products')
})

module.exports = router
