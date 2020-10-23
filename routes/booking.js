var router = require('express').Router()
const authMiddleware = require('../middleware/verifyAuth')
const {
  booking,
} = require('./../controllers/bookingCtrl')

router.post('/', authMiddleware, booking)

module.exports = router