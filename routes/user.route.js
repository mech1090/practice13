const express = require('express')
const router = express.Router()
const userController = require('../controller/user.controller')


router.get('/login',userController.getLoginFrom)
router.post('/login',userController.login)
router.get('/login',userController.getSignupForm)
router.post('/login',userController.signup)

module.exports = router