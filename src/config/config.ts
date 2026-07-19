import 'dotenv/config.js'
import { configSchema } from '../schemas/configSchema.js'

const parsedEnv = configSchema.parse(process.env)

const CONFIG = {
  PORT: parsedEnv.PORT,
  DB_URI: parsedEnv.DB_URI,
}

export default CONFIG
