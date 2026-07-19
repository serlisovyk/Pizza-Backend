import { z } from 'zod'
import { SORT_FIELDS } from '../constants/domainConstants.js'
import { ID_CHECK_REGEX } from '../constants/validationConstants.js'

const optionalTrimmedString = z.string().trim().min(1).optional()

export const productListQuerySchema = z
  .object({
    category: optionalTrimmedString,
    search: z.string().trim().min(1).max(100).optional(),
    sortBy: z.enum(SORT_FIELDS).optional(),
    page: z.coerce.number().int().min(1).default(1),
  })
  .strict()

export const productParamsSchema = z
  .object({
    id: z.string().regex(ID_CHECK_REGEX, 'Invalid product id'),
  })
  .strict()
