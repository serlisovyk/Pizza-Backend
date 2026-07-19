import { Request } from 'express'
import ApiError from '../error/ApiError.js'
import { VALIDATION_TARGET } from '../types/types.js'

export default function getValidatedRequestData<T>(
  req: Request,
  target: VALIDATION_TARGET,
): T {
  const data = req.validated?.[target]

  if (!data) {
    throw ApiError.internal(`Validated ${target} data is missing`)
  }

  return data as T
}
