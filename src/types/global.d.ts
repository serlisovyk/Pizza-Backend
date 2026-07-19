import { VALIDATION_TARGET } from './types'

declare global {
  namespace Express {
    interface Request {
      validated?: Partial<Record<VALIDATION_TARGET, unknown>>
    }
  }
}
