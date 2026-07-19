import { NextFunction, Request, Response } from 'express'
import { VALIDATION_TARGET } from '../constants/constants.js'
import ApiError from '../error/ApiError.js'
import ProductsService from '../services/ProductsService.js'
import { ProductListQuery, ProductParams } from '../types/types.js'
import getValidatedRequestData from '../utils/getValidatedRequestData.js'

class ProductsController {
  async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const query = getValidatedRequestData<ProductListQuery>(
        req,
        VALIDATION_TARGET.Query,
      )
      const paginatedProducts = await ProductsService.getAllProducts(
        query,
      )
      res.status(200).json(paginatedProducts)
    } catch (err) {
      next(
        err instanceof ApiError
          ? err
          : ApiError.badRequest('An unknown error occurred')
      )
    }
  }

  async getOne(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const params = getValidatedRequestData<ProductParams>(
        req,
        VALIDATION_TARGET.Params,
      )
      const singleProduct = await ProductsService.getProductById(
        params.id,
      )
      res.status(200).json(singleProduct)
    } catch (err) {
      next(
        err instanceof ApiError
          ? err
          : ApiError.badRequest('An unknown error occurred')
      )
    }
  }
}

export default new ProductsController()
