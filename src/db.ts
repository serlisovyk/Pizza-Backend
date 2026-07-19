import { connect } from 'mongoose'
import AppConsole from './logger/AppConsole.js'

export default async function connectDB() {
  try {
    if (!process.env.DB_URI) {
      AppConsole.warn('DB_URI not found')
      process.exit(1)
    }

    await connect(process.env.DB_URI)

    AppConsole.success('Connected to MongoDB')
  } catch (error) {
    AppConsole.error('Failed to connect to MongoDB', error)
    process.exit(1)
  }
}
