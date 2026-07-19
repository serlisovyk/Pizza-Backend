import { ZodError } from 'zod'
import { VALIDATION_ROOT_FIELD } from '../constants/validationConstants.js'

export default function formatZodError(error: ZodError) {
  return error.issues.reduce<Record<string, string>>((fields, issue) => {
    const path = issue.path.join('.')
    fields[path || VALIDATION_ROOT_FIELD] = issue.message

    return fields
  }, {})
}
