import type { ValidationTarget } from './requestTypes.js'

declare global {
  namespace Express {
    interface Request {
      validated?: Partial<Record<ValidationTarget, unknown>>
    }
  }
}
