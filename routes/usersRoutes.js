const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

router.post('/login', usersController.login)
router.post('/register', usersController.register)
router.post('/', usersController.create)
router.put('/:userId', usersController.update)
router.get('/', usersController.getAll)
router.get('/:userId', usersController.getUser)

module.exports = router
