import CategoryModel from '../models/CategoriesModel.js'

class CategoriesRepository {
  findAll() {
    return CategoryModel.find()
  }
}

export default new CategoriesRepository()
