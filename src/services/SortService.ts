import AppError from '../error/AppError.js'
import SortModel from '../models/SortModel.js'
import { ISort } from '../types/types'

class SortService {
  async getAllSorts(): Promise<ISort[]> {
    const sorts: ISort[] = await SortModel.find()

    if (!sorts.length) throw AppError.notFound('No sorts found')

    return sorts
  }
}

export default new SortService()
