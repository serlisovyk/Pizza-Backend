import { Router } from 'express'
import SortController from '../controllers/SortController.js'
import asyncHandler from '../middlewares/asyncHandlerMiddleware.js'

const router = Router()

router.get('/', asyncHandler(SortController.getAll))

export default router
