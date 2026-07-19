import { NextFunction, Request, Response } from 'express'
import ApiError from '../error/ApiError.js'

export default function errorHandler(
  err: unknown,
  _: Request,
  res: Response,
  __: NextFunction,
) {
  if (err instanceof ApiError) {
    const { status, code, message, fields } = err

    return res.status(status).json({
      error: {
        code,
        message,
        ...(fields ? { fields } : {}),
      },
    })
  }

  return res.status(500).json({
    error: {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Unexpected error',
    },
  })
}
