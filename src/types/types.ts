import { NextFunction, Request, Response } from 'express'
import { Document, QueryFilter } from 'mongoose'
import { z } from 'zod'
import {
  ERROR_CODE,
  SORT_FIELDS,
  VALIDATION_TARGET,
} from '../constants/constants.js'
import {
  productListQuerySchema,
  productParamsSchema,
} from '../schemas/productsSchema.js'

export interface Category extends Document {
  name: string
}

export interface Product extends Document {
  id: string
  imageUrl: string
  description: string
  title: string
  types: number[]
  sizes: number[]
  price: number
  category: string
  rating: number
}

export interface Sort extends Document {
  name: string
  sortProperty: SortOptions
}

export type VALIDATION_TARGET =
  (typeof VALIDATION_TARGET)[keyof typeof VALIDATION_TARGET]

export type ERROR_CODE = (typeof ERROR_CODE)[keyof typeof ERROR_CODE]

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

type SortOptions = (typeof SORT_FIELDS)[number]
