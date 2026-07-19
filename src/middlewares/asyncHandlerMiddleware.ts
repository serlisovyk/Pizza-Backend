import { NextFunction, Request, Response } from 'express'
import type { AsyncController } from '../types/requestTypes.js'

export default function asyncHandler(handler: AsyncController) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}
