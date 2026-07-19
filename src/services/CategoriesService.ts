import CategoriesRepository from '../repositories/CategoriesRepository.js'
import { Category } from '../types/types'

class CategoryService {
  async getAllCategories(): Promise<Category[]> {
    return CategoriesRepository.findAll()
  }
}

export default new CategoryService()
