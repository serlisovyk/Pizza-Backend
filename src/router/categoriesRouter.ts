import { Router } from 'express'
import CategoriesController from '../controllers/CategoriesController.js'
import asyncHandler from '../middlewares/asyncHandlerMiddleware.js'

const router = Router()

router.get('/', asyncHandler(CategoriesController.getAll))

export default router
