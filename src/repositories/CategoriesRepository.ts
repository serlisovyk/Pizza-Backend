import CategoryModel from '../models/CategoriesModel.js'

class CategoriesRepository {
  findAll() {
    return CategoryModel.find().lean()
  }
}

export default new CategoriesRepository()
