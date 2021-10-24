require('dotenv').config({ path: './config/config.env' })
const express = require('express')
const { sequelize } = require('./database/models')
const app = express()

app.use(express.json())
//morgan for dev
process.env.NODE_ENV === 'development' && app.use(morgan('dev'))

//routes
app.use('/api/users', require('./routes/usersRoutes'))
app.use('/api/products', require('./routes/productsRoutes'))

app.listen(process.env.PORT, async () => {
  console.log(`Running on http://localhost:${process.env.PORT}`)
  await sequelize.authenticate()
  console.log('Database connected!')
})
