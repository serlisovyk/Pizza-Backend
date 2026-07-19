import { Router } from 'express'
import ProductsController from '../controllers/ProductsController.js'
import { VALIDATION_TARGET } from '../constants/constants.js'
import { validate } from '../middlewares/validate.middleware.js'
import {
  productListQuerySchema,
  productParamsSchema,
} from '../schemas/productsSchema.js'

const router = Router()

router.get(
  '/',
  validate(VALIDATION_TARGET.Query, productListQuerySchema),
  ProductsController.getAll,
)
router.get(
  '/:id',
  validate(VALIDATION_TARGET.Params, productParamsSchema),
  ProductsController.getOne,
)

export default router
