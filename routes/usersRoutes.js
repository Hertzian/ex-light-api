const express = require('express')
const router = express.Router()
const usersController = require('../controllers/userController')

router.post('/login', usersController.login)
router.post('/register', usersController.register)
router.post('/', usersController.create)
router.put('/:userId', usersController.update)
router.get('/', usersController.getUser)
router.get('/:userId', usersController.getAll)

module.exports = router
