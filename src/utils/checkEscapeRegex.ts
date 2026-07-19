import { ESCAPE_REGEX } from '../constants/constants.js'

export function checkEscapeRegex(value: string) {
  return value.replace(ESCAPE_REGEX, '\\$&')
}
