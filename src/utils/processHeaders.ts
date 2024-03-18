import { isPlainObject } from './index'

function normalizeHeaderName(headers: any, normalizedName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach((prop) => {
    if (prop !== normalizedName && prop.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[prop]
      delete headers[prop]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')

  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}
