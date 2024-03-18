import type { AxiosRequestConfig } from '../types'
import { processHeaders } from './processHeaders'
import { isDate, isPlainObject } from './index'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

/**
 * build axios url, append params to url and encode Date and Object
 * @param url url
 * @param params axios config params
 * @returns builded url
 */
export function buildURL(url: string, params?: any) {
  if (!params) {
    return url
  }

  const parts: string[] = []
  Object.keys(params).forEach((key: string) => {
    let val = params[key]
    if (val === null || typeof val === 'undefined') {
      return
    }
    let values: string[]
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    values.forEach((val) => {
      if (isDate(val)) {
        val = (val as any as Date).toISOString()
      } else if (isPlainObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })
  let serializedParams = parts.join('&')
  if (serializedParams) {
    const markIndex = url.indexOf('#')
    if (markIndex !== -1) {
      url = url.slice(0, markIndex)
    }
    url += (!url.includes('?') ? '?' : '&') + serializedParams
  }
  return url
}

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

/**
 * transform url
 * @param config axios config
 * @returns transformed url
 */
export function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

/**
 * transform headers
 * @param config axios config
 * @returns transformed config headers
 */
function transformHeaders(config: AxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

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
