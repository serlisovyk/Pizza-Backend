import { Document } from 'mongoose'
import { z } from 'zod'
import { VALIDATION_TARGET } from '../constants/constants.js'
import {
  productListQuerySchema,
  productParamsSchema,
} from '../schemas/productsSchema.js'

export interface QueryParams {
  category?: string
  search?: string
  sortBy?: SortOptions
  page?: number
}

export interface ICategory extends Document {
  name: string
}

export interface IProduct extends Document {
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

export interface ISort extends Document {
  name: string
  sortProperty: SortOptions
}

export type SortOptions = 'title' | 'price' | 'rating'

export type VALIDATION_TARGET =
  (typeof VALIDATION_TARGET)[keyof typeof VALIDATION_TARGET]

export type ProductListQuery = z.infer<typeof productListQuerySchema>
export type ProductParams = z.infer<typeof productParamsSchema>
