import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const DB = process.env.MONGODB_URI.replace(
  '<PASSWORD>',
  process.env.MONGODB_PASSWORD
)

const connectDB = async () => {
  const conn = await mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  console.log(
    `Database connected successfully on ${conn.connection.host}`.cyan.underline
  )
}

export default connectDB
