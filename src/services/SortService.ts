import SortRepository from '../repositories/SortRepository.js'
import type { Sort } from '../types/modelTypes.js'

class SortService {
  async getAllSorts(): Promise<Sort[]> {
    return SortRepository.findAll()
  }
}

export default new SortService()
