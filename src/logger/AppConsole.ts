class AppConsole {
  static info(message: string) {
    console.log(`ℹ️ ${message}`)
  }

  static success(message: string) {
    console.log(`✅ ${message}`)
  }

  static warn(message: string) {
    console.warn(`⚠️ ${message}`)
  }

  static error(message: string, error?: unknown) {
    console.error(`❌ ${message}`)

    if (error) console.error(error)
  }
}

export default AppConsole
