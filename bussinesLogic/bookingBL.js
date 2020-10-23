const BookingModel = require('../models/bookingModel')

const reservation = async (userId, bookingData) => {
    try {
        bookingData.user_id = userId;
        const response = await BookingModel(bookingData).save()
        return { status: 1, response }
    } catch (err) {
        return { status: 2, msg: 'Error saving booking' }
    }
}

module.exports = {
    reservation
}