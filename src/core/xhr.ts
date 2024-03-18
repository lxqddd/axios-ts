import { transformResponseData } from '../helpers/transformResponse'
import type { AxiosRequestConfig, AxiosResponse, AxiosResponsePromise } from '../types'
import { parseHeaders } from '../utils'

export default function xhr(config: AxiosRequestConfig): AxiosResponsePromise {
  return new Promise((resolve: (value: AxiosResponse) => void, reject: (reason: any) => void) => {
    const { data = null, method = 'get', url, headers = {}, responseType } = config

    const request = new XMLHttpRequest()

    if (responseType) {
      request.responseType = responseType
    }

    request.open(method.toUpperCase(), url, true)

    Object.keys(headers).forEach((prop: string) => {
      if (data === null && prop.toLowerCase() === 'content-type') {
        delete headers[prop]
      } else {
        request.setRequestHeader(prop, headers[prop])
      }
    })
    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return
      }
      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
      const responseData = responseType && responseType !== 'text' ? request.response : request.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      resolve(transformResponseData(response))
    }
    request.send(data)
  })
}
