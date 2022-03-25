const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')
const path = require('path')
const PORT = process.env.PORT || 5000

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database connected"))
app.use(express.static(path.resolve(__dirname, "../src/index.js")));
app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(PORT, () => console.log("server is up and running fine")) 