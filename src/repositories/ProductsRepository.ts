import ProductsModel from '../models/ProductsModel.js'
import { checkEscapeRegex } from '../utils/checkEscapeRegex.js'
import { PRODUCTS_PAGE_LIMIT } from '../constants/domainConstants.js'
import type {
  ProductListQuery,
  ProductsFilter,
  ProductsOptions,
} from '../types/requestTypes.js'

class ProductsRepository {
  findAll(query: ProductListQuery) {
    const filter = this.buildProductsFilter(query)
    const { skip, limit, sort } = this.buildProductsOptions(query)

    const productsQuery = ProductsModel.find(filter).skip(skip).limit(limit).lean()
    if (sort) productsQuery.sort(sort)

    return productsQuery
  }

  findById(id: string) {
    return ProductsModel.findById(id).lean()
  }

  private buildProductsOptions(query: ProductListQuery): ProductsOptions {
    const { page, sortBy } = query

    const options: ProductsOptions = {
      skip: (page - 1) * PRODUCTS_PAGE_LIMIT,
      limit: PRODUCTS_PAGE_LIMIT,
    }

    if (sortBy) {
      options.sort = { [sortBy]: -1 }
    }

    return options
  }

  private buildProductsFilter(query: ProductListQuery): ProductsFilter {
    const { category, search } = query

    const filter: ProductsFilter = {}

    if (category) {
      filter.category = category
    }

    if (search) {
      filter.$or = [{ title: { $regex: checkEscapeRegex(search), $options: 'i' } }]
    }

    return filter
  }
}

export default new ProductsRepository()
