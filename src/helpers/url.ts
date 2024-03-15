import { isDate, isObject } from '../utils/index'

export function bildURL(url: string, params?: any) {
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
      } else if (isObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })
}
