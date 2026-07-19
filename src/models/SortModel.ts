import { model, Schema } from 'mongoose'
import { SORT_FIELDS, MODEL_NAME } from '../constants/domainConstants.js'
import type { Sort } from '../types/modelTypes.js'

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

const Sort = model<Sort>(MODEL_NAME.SORT, sortSchema)

export default Sort
