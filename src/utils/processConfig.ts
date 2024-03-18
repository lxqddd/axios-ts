import { transformRequest } from '../helpers/data'
import { buildURL } from '../helpers/url'
import type { AxiosRequestConfig } from '../types'

export function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

export function processConfig(config: AxiosRequestConfig): AxiosRequestConfig {
  config.url = transformUrl(config)
  config.data = transformRequest(config)
  return config
}
