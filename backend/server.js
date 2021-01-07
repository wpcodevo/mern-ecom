import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'
// import connectDB from './config/db.js'

dotenv.config()

console.log(process.env.MONGODB_URI)
const app = express()
app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p._id === req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 5000
app.listen(
  5000,
  console.log(
    `Server started successfully in ${process.env.NODE_ENV} on port: ${PORT}`
  )
)
