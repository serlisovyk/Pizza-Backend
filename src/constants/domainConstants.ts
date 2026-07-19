export const ESCAPE_REGEX = /[.*+?^${}()|[\]\\]/g

export const PRODUCTS_PAGE_LIMIT = 4

export const SORT_FIELDS = ['title', 'price', 'rating'] as const

export const MODEL_NAME = {
  PRODUCT: 'Product',
  CATEGORY: 'Category',
  SORT: 'Sort',
} as const
