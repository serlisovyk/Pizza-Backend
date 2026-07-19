import { connect } from 'mongoose'
import CONFIG from './config/config.js'
import AppConsole from './logger/AppConsole.js'

export default async function connectDB() {
  try {
    await connect(CONFIG.DB_URI)

    AppConsole.success('Connected to MongoDB')
  } catch (error) {
    AppConsole.error('Failed to connect to MongoDB', error)
    process.exit(1)
  }
}
