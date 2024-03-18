import type { AxiosRequestConfig } from '../types'
import { processHeaders } from '../utils/processHeaders'

/**
 * transform headers
 * @param config axios config
 * @returns transformed config headers
 */
export function transformHeaders(config: AxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}
