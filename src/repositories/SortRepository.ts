import SortModel from '../models/SortModel.js'

class SortRepository {
  findAll() {
    return SortModel.find()
  }
}

export default new SortRepository()
