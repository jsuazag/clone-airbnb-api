const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
const port = process.env.PORT || 8000;

// mongo connection
require('./connection/connectionDb')

app.get('/', (req, res) => {
    res.json({'Status': 'Success'})
})

// Routes
const experiencesRoutes = require('./routes/experiences')
app.use('/experiences', experiencesRoutes)

const userRoutes = require('./routes/user')
app.use('/users', userRoutes)


app.listen(port, () => {
    console.log(`Server running ${port}`)
})