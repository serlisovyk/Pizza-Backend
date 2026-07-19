import { ERROR_CODE } from '../constants/constants.js'
import { ERROR_CODE as ErrorCode } from '../types/types.js'

export default class AppError extends Error {
  status: number
  code: ErrorCode
  fields?: Record<string, string>

  constructor(
    status: number,
    message: string,
    code: ErrorCode,
    fields?: Record<string, string>,
  ) {
    super(message)
    this.status = status
    this.code = code
    this.fields = fields
  }

  static badRequest(message: string) {
    return new AppError(400, message, ERROR_CODE.BAD_REQUEST)
  }

  static internal(message: string) {
    return new AppError(500, message, ERROR_CODE.INTERNAL_SERVER_ERROR)
  }

  static forbidden(message: string) {
    return new AppError(403, message, ERROR_CODE.FORBIDDEN)
  }

  static conflict(message: string) {
    return new AppError(409, message, ERROR_CODE.CONFLICT)
  }

  static notFound(message: string) {
    return new AppError(404, message, ERROR_CODE.NOT_FOUND)
  }

  static validation(message: string, fields: Record<string, string>) {
    return new AppError(422, message, ERROR_CODE.VALIDATION_ERROR, fields)
  }
}
