import { model, Schema } from 'mongoose'
import { SORT_FIELDS } from '../constants/constants.js'
import { Sort } from '../types/types'

const sortSchema = new Schema<Sort>(
  {
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
    sortProperty: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      enum: SORT_FIELDS,
    },
  },
  { collection: 'sort' },
)

const Sort = model<Sort>('Sort', sortSchema)

export default Sort
