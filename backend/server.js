import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import products from './data/products.js'
import connectDB from './config/db.js'

process.on('uncaughtException', err => {
  console.log(`UNCAUGHT EXCEPTION Shutting down...`.red.underline.bold)
  console.log(err.name, err.message)
  server.exit(1)
})

dotenv.config()

const app = express()

connectDB()

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 5000
const server = app.listen(
  5000,
  console.log(
    `Server started successfully in ${process.env.NODE_ENV} on port: ${PORT}`
      .yellow.bold
  )
)

process.on('unhandledRejection', () => {
  console.log(`UNHANDLED REJECTION Shutting down...`.red.underline.bold)
  server.close(() => {
    process.exit(1)
  })
})
