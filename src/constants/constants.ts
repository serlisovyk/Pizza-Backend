export const ID_CHECK_REGEX = /^[0-9a-fA-F]{24}$/

export const ESCAPE_REGEX = /[.*+?^${}()|[\]\\]/g

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

export const ERROR_MESSAGE = {
  PRODUCT_NOT_FOUND: 'Product not found',
  UNEXPECTED_ERROR: 'Unexpected error',
  VALIDATED_REQUEST_DATA_IS_MISSING: 'Validated request data is missing',
} as const

export const PRODUCTS_PAGE_LIMIT = 4

export const SORT_FIELDS = ['title', 'price', 'rating'] as const

export const MODEL_NAME = {
  PRODUCT: 'Product',
  CATEGORY: 'Category',
  SORT: 'Sort',
} as const
