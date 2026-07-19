import { z } from 'zod'

export const configSchema = z.object({
  PORT: z.coerce.number().int().positive().default(5000),
  DB_URI: z.string().min(1, 'DB_URI is required'),
})
