import mongoose from 'mongoose'

console.log(process.env.MONGODB_URI)

const DB = process.env.MONGODB_URI.replace('<PASSWORD>', process.env.PASSWORD)
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    console.log(`Database connected successfully on ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
  }
}

// export default connectDB
