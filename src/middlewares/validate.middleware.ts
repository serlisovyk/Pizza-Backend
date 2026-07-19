import { NextFunction, Request, Response } from 'express'
import { ZodType } from 'zod'
import ApiError from '../error/ApiError.js'
import { VALIDATION_TARGET as ValidationTargetType } from '../types/types.js'
import formatZodError from '../utils/formatZodError.js'

export function validate(target: ValidationTargetType, schema: ZodType) {
  return (req: Request, _: Response, next: NextFunction) => {
    const { data, success, error } = schema.safeParse(req[target])

    if (!success) {
      return next(
        ApiError.validation(`Invalid ${target} parameters`, formatZodError(error)),
      )
    }

    req.validated = {
      ...req.validated,
      [target]: data,
    }

    next()
  }
}
