const express = require('express')
const app = express()
const port = 5000
const { Client } = require('pg')
const mountRoutes = require('./Routes')
const cors = require('cors')
//const { Client } = require('pg');

const corsOptions = {
  origin: 'http://localhost:3000' //process.env.CLIENT_URL
}


app.use(cors())
mountRoutes(app)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))