import type { Document } from 'mongoose'
import type { SORT_FIELDS } from '../constants/domainConstants.js'

export type SortOptions = (typeof SORT_FIELDS)[number]

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
