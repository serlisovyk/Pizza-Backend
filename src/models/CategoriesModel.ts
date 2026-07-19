import { model, Schema } from 'mongoose'
import { MODEL_NAME } from '../constants/constants.js'
import { Category } from '../types/types'

const categorySchema = new Schema<Category>({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
})

const Category = model<Category>(MODEL_NAME.CATEGORY, categorySchema)

export default Category
