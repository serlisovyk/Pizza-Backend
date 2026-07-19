import SortModel from '../models/SortModel.js'

class SortRepository {
  findAll() {
    return SortModel.find().lean()
  }
}

export default new SortRepository()
