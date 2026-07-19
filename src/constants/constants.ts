export const ID_CHECK_REGEX = /^[0-9a-fA-F]{24}$/

export const VALIDATION_TARGET = {
  Query: 'query',
  Params: 'params',
  Body: 'body',
} as const

export const ERROR_CODE = {
  BAD_REQUEST: 'BAD_REQUEST',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  FORBIDDEN: 'FORBIDDEN',
  CONFLICT: 'CONFLICT',
  NOT_FOUND: 'NOT_FOUND',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
} as const
