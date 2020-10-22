var router = require('express').Router()
const authMiddleware = require('../middleware/verifyAuth')
const {
  autologin,
  signup,
  login
} = require('./../controllers/userCtrl')

router.post('/login', login)
router.post('/signup', signup)
router.post('/autologin', authMiddleware, autologin)

module.exports = router