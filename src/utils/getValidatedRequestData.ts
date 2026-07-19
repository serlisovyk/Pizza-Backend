import { Request } from 'express'
import AppError from '../error/AppError.js'
import { ERROR_MESSAGE } from '../constants/errorConstants.js'
import type { ValidationTarget } from '../types/requestTypes.js'

export default function getValidatedRequestData<T>(
  req: Request,
  target: ValidationTarget,
): T {
  const data = req.validated?.[target]

  if (!data) {
    throw AppError.internal(ERROR_MESSAGE.VALIDATED_REQUEST_DATA_IS_MISSING)
  }

  return data as T
}
