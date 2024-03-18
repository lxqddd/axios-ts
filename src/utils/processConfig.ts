import type { AxiosRequestConfig } from '../types'
import { transformUrl } from '../helpers/transformUrl'
import { transformHeaders } from '../helpers/transformHeaders'
import { transformRequest } from '../helpers/transformRequest'

/**
 * process axios config
 * @param config axios config
 * @returns processed config
 */
export function processConfig(config: AxiosRequestConfig): AxiosRequestConfig {
  config.url = transformUrl(config)
  config.headers = transformHeaders(config)
  config.data = transformRequest(config)
  return config
}
