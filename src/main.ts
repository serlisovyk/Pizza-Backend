import connectDB from './db.js'
import app from './app.js'
import { startServer } from './server.js'

async function bootstrap() {
  await connectDB()
  startServer(app)
}

void bootstrap()
