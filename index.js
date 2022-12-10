require('dotenv').config();

// install express with `npm install express` 
const express = require('express')
const app = express()
const PORT = 8080

const routes = require('./routes/people')

app.use(express.json())

app.use('/', routes)


app.listen(
    PORT,
    () => console.log(`its alive on http://localhost:${PORT}`)
    )

// export 'app'
module.exports = app