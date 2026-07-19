import { Router } from 'express'
import ProductsController from '../controllers/ProductsController.js'
import { VALIDATION_TARGET } from '../constants/constants.js'
import asyncHandler from '../middlewares/asyncHandlerMiddleware.js'
import { validate } from '../middlewares/validateMiddleware.js'
import {
  productListQuerySchema,
  productParamsSchema,
} from '../schemas/productsSchema.js'

const router = Router()

router.get(
  '/',
  validate(VALIDATION_TARGET.Query, productListQuerySchema),
  asyncHandler(ProductsController.getAll),
)
router.get(
  '/:id',
  validate(VALIDATION_TARGET.Params, productParamsSchema),
  asyncHandler(ProductsController.getOne),
)

export default router
