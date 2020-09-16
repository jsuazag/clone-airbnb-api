const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
const port = 3001

// Routes
const experiencesRoutes = require('./routes/experiences')

app.use('/experiences', experiencesRoutes)
/* Sample endpoints:
    - localhost:3001/experiences
    - localhost:3001/experiences/top5
    - localhost:3001/experiences/detail/1
*/

app.listen(port, () => {
    console.log(`Server running ${port}`)
})