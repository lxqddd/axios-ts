import { isPlainObject } from '../utils'

/**
 * transform request data
 * @param data request data
 * @returns transformed data
 */
export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
