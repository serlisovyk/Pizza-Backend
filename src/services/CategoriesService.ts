import AppError from '../error/AppError.js'
import CategoryModel from '../models/CategoriesModel.js'
import { ICategory } from '../types/types'

class CategoryService {
  async getAllCategories(): Promise<ICategory[]> {
    const categories: ICategory[] = await CategoryModel.find()

    if (!categories.length) throw AppError.notFound('No categories found')

    return categories
  }
}

export default new CategoryService()
