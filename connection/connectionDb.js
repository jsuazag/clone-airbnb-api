const mongoose = require('mongoose')

const url = 'mongodb+srv://db_airbnbapp:app*2020@cluster0.eig00.mongodb.net/db_cloneairbnbapp?retryWrites=true&w=majority'
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => console.error('Error connecting with database'))
db.once('open', () => console.log('Connection with mongo success'))

module.exports = db