import { ERROR_MESSAGE } from '../constants/constants.js'
import AppError from '../error/AppError.js'
import ProductsRepository from '../repositories/ProductsRepository.js'
import { ProductListQuery } from '../types/types'

class ProductsService {
  async getAllProducts(query: ProductListQuery) {
    return ProductsRepository.findAll(query)
  }

  async getProductById(id: string) {
    const product = await ProductsRepository.findById(id)

    if (!product) throw AppError.notFound(ERROR_MESSAGE.PRODUCT_NOT_FOUND)

    return product
  }
}

export default new ProductsService()
