require('dotenv').config({ path: './config/config.env' })
const express = require('express')
const { sequelize } = require('./database/models')
const app = express()

app.listen(process.env.PORT, async () => {
  console.log(`Running on http://localhost:${process.env.PORT}`)
  await sequelize.authenticate()
  console.log('Database connected!')
})
