const mongoose = require('mongoose')
const { mongo } = require('mongoose')
const moongose = require('mongoose')
const { Schema } = mongoose

const BookingSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    booking_date: Date,
    experience_id: String
})

const BookingModel = moongose.model('bookings', BookingSchema)

module.exports = BookingModel