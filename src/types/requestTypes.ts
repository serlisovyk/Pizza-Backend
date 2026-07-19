import type { NextFunction, Request, Response } from 'express'
import type { QueryFilter } from 'mongoose'
import type { z } from 'zod'
import type {
  productListQuerySchema,
  productParamsSchema,
} from '../schemas/productsSchema.js'
import type { VALIDATION_TARGET } from '../constants/validationConstants.js'
import type { Product, SortOptions } from './modelTypes.js'

export type ValidationTarget =
  (typeof VALIDATION_TARGET)[keyof typeof VALIDATION_TARGET]

export interface AsyncController {
  (req: Request, res: Response, next: NextFunction): Promise<void>
}

export type ProductListQuery = z.infer<typeof productListQuerySchema>
export type ProductParams = z.infer<typeof productParamsSchema>

export type ProductsFilter = QueryFilter<Product>

export interface ProductsOptions {
  skip: number
  limit: number
  sort?: Partial<Record<SortOptions, -1>>
}
