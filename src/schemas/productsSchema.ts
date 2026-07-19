import { z } from 'zod'
import { ID_CHECK_REGEX } from '../constants/constants.js'

const optionalTrimmedString = z.string().trim().min(1).optional()

export const productListQuerySchema = z
  .object({
    category: optionalTrimmedString,
    search: z.string().trim().min(1).max(100).optional(),
    sortBy: z.enum(['title', 'price', 'rating']).optional(),
    page: z.coerce.number().int().min(1).default(1),
  })
  .strict()

export const productParamsSchema = z
  .object({
    id: z.string().regex(ID_CHECK_REGEX, 'Invalid product id'),
  })
  .strict()
