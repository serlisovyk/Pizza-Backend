import { ZodError } from 'zod'

export default function formatZodError(error: ZodError) {
  return error.issues.reduce<Record<string, string>>((fields, issue) => {
    const path = issue.path.join('.')
    fields[path || 'root'] = issue.message

    return fields
  }, {})
}
