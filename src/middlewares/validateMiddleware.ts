import { NextFunction, Request, Response } from 'express'
import { ZodType } from 'zod'
import AppError from '../error/AppError.js'
import formatZodError from '../utils/formatZodError.js'
import type { ValidationTarget } from '../types/requestTypes.js'

export function validate(target: ValidationTarget, schema: ZodType) {
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
