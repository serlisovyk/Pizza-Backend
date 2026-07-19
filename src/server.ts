import { Express } from 'express'
import AppConsole from './logger/AppConsole.js'

const PORT = process.env.PORT || 5000

export function startServer(app: Express) {
  try {
    app.listen(PORT, () => AppConsole.success(`Server started on port ${PORT}`))
  } catch (error) {
    AppConsole.error('Error starting the server', error)
  }
}
