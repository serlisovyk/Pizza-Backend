import { Request, Response } from 'express'
import CategoryService from '../services/CategoriesService.js'

class CategoriesController {
  async getAll(_: Request, res: Response): Promise<void> {
    const categories = await CategoryService.getAllCategories()

    res.status(200).json(categories)
  }
}

export default new CategoriesController()
