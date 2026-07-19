import { NextFunction, Request, Response } from 'express'
import { ZodType } from 'zod'
import AppError from '../error/AppError.js'
import { VALIDATION_TARGET } from '../types/types.js'
import formatZodError from '../utils/formatZodError.js'

export function validate(target: VALIDATION_TARGET, schema: ZodType) {
  return (req: Request, _: Response, next: NextFunction) => {
    const { data, success, error } = schema.safeParse(req[target])

    if (!success) {
      return next(
        AppError.validation(`Invalid ${target} parameters`, formatZodError(error)),
      )
    }

    req.validated = {
      ...req.validated,
      [target]: data,
    }

    next()
  }
}
