import { Request } from 'express'
import AppError from '../error/AppError.js'
import { VALIDATION_TARGET } from '../types/types.js'

export default function getValidatedRequestData<T>(
  req: Request,
  target: VALIDATION_TARGET,
): T {
  const data = req.validated?.[target]

  if (!data) {
    throw AppError.internal(`Validated ${target} data is missing`)
  }

  return data as T
}
