import type { AxiosRequestConfig } from '../types'

export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, method = 'get', url, headers = {} } = config

  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)

  Object.keys(headers).forEach((prop: string) => {
    if (data === null && prop.toLowerCase() === 'content-type') {
      delete headers[prop]
    } else {
      request.setRequestHeader(prop, headers[prop])
    }
  })
  request.send(data)
}
