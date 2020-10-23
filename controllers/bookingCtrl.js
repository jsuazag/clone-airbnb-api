const { 
    reservation
} = require('../bussinesLogic/bookingBL')

const booking = async(req, res) => {
  const { userId } = req.query
  const reservationData = req.body
  const response = await reservation(userId, reservationData)
  res.json(response)
}

module.exports = {
    booking
}