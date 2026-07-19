import { Request } from 'express'
import { ERROR_MESSAGE } from '../constants/constants.js'
import AppError from '../error/AppError.js'
import { VALIDATION_TARGET } from '../types/types.js'

export default function getValidatedRequestData<T>(
  req: Request,
  target: VALIDATION_TARGET,
): T {
  const data = req.validated?.[target]

  if (!data) {
    throw AppError.internal(ERROR_MESSAGE.VALIDATED_REQUEST_DATA_IS_MISSING)
  }

  return data as T
}
