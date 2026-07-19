import SortRepository from '../repositories/SortRepository.js'
import { Sort } from '../types/types'

class SortService {
  async getAllSorts(): Promise<Sort[]> {
    return SortRepository.findAll()
  }
}

export default new SortService()
