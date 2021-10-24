const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')

router.post('/', productsController.create)
router.put('/:productId', productsController.update)
router.get('/', productsController.getAll)
router.get('/:productId', productsController.getProduct)

module.exports = router
