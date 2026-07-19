import { NextFunction, Request, Response } from 'express'
import { AsyncController } from '../types/types.js'

export default function asyncHandler(handler: AsyncController) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}
