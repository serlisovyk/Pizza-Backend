export const ID_CHECK_REGEX = /^[0-9a-fA-F]{24}$/

export const VALIDATION_ROOT_FIELD = '_root'

export const VALIDATION_TARGET = {
  Query: 'query',
  Params: 'params',
  Body: 'body',
} as const
