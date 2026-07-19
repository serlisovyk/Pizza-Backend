import CategoriesRepository from '../repositories/CategoriesRepository.js'
import type { Category } from '../types/modelTypes.js'

class CategoryService {
  async getAllCategories(): Promise<Category[]> {
    return CategoriesRepository.findAll()
  }
}

export default new CategoryService()
