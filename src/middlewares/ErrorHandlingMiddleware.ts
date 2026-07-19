import { NextFunction, Request, Response } from 'express'
import AppError from '../error/AppError.js'
import { ERROR_CODE, ERROR_MESSAGE } from '../constants/errorConstants.js'

export default function errorHandler(
  err: unknown,
  _: Request,
  res: Response,
  __: NextFunction,
) {
  if (err instanceof AppError) {
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
      code: ERROR_CODE.INTERNAL_SERVER_ERROR,
      message: ERROR_MESSAGE.UNEXPECTED_ERROR,
    },
  })
}
