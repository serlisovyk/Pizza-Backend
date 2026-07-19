import { Express } from 'express'
import CONFIG from './config/config.js'
import AppConsole from './logger/AppConsole.js'

export function startServer(app: Express) {
  try {
    app.listen(CONFIG.PORT, () =>
      AppConsole.success(`Server started on port ${CONFIG.PORT}`),
    )
  } catch (error) {
    AppConsole.error('Error starting the server', error)
  }
}
