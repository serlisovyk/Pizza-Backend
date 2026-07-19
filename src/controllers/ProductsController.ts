import { Request, Response } from 'express'
import ProductsService from '../services/ProductsService.js'
import getValidatedRequestData from '../utils/getValidatedRequestData.js'
import { VALIDATION_TARGET } from '../constants/validationConstants.js'
import type { ProductListQuery, ProductParams } from '../types/requestTypes.js'

class ProductsController {
  async getAll(req: Request, res: Response): Promise<void> {
    const query = getValidatedRequestData<ProductListQuery>(
      req,
      VALIDATION_TARGET.Query,
    )

    const paginatedProducts = await ProductsService.getAllProducts(query)

    res.status(200).json(paginatedProducts)
  }

  async getOne(req: Request, res: Response): Promise<void> {
    const params = getValidatedRequestData<ProductParams>(
      req,
      VALIDATION_TARGET.Params,
    )

    const singleProduct = await ProductsService.getProductById(params.id)

    res.status(200).json(singleProduct)
  }
}

export default new ProductsController()
