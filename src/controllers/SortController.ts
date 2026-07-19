import { Request, Response } from 'express'
import SortService from '../services/SortService.js'

class SortController {
  async getAll(_: Request, res: Response): Promise<void> {
    const sort = await SortService.getAllSorts()

    res.status(200).json(sort)
  }
}

export default new SortController()
