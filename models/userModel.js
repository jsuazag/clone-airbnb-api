const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String,
  phone: String,
  identification: String,
  email: String,
  password: String,
})

const User = mongoose.model('users', UserSchema)

module.exports = User