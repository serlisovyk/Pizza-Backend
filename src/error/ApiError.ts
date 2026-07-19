export default class ApiError extends Error {
  status: number
  code: string
  fields?: Record<string, string>

  constructor(
    status: number,
    message: string,
    code: string,
    fields?: Record<string, string>
  ) {
    super(message)
    this.status = status
    this.code = code
    this.fields = fields
  }

  static badRequest(message: string) {
    return new ApiError(400, message, 'BAD_REQUEST')
  }

  static internal(message: string) {
    return new ApiError(500, message, 'INTERNAL_SERVER_ERROR')
  }

  static forbidden(message: string) {
    return new ApiError(403, message, 'FORBIDDEN')
  }

  static notFound(message: string) {
    return new ApiError(404, message, 'NOT_FOUND')
  }

  static validation(message: string, fields: Record<string, string>) {
    return new ApiError(422, message, 'VALIDATION_ERROR', fields)
  }
}
