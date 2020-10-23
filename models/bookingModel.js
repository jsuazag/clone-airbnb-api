const mongoose = require('mongoose')
const { mongo } = require('mongoose')
const moongose = require('mongoose')
const { Schema } = mongoose

const BookingSchema = new Schema({
    booking_date_start: Date,
    booking_date_end: Date,
    experience_id: String,
    user_id: String,
    comments: String
})

const BookingModel = moongose.model('bookings', BookingSchema)

module.exports = BookingModel