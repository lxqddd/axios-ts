import { transformResponseData } from '../helpers/transformResponse'
import type { AxiosRequestConfig, AxiosResponse, AxiosResponsePromise } from '../types'
import { parseHeaders } from '../utils'

export default function xhr(config: AxiosRequestConfig): AxiosResponsePromise {
  return new Promise((resolve: (value: AxiosResponse) => void, reject: (reason: any) => void) => {
    const { data = null, method = 'get', url, headers = {}, responseType, timeout } = config

    const request = new XMLHttpRequest()

    if (responseType) {
      request.responseType = responseType
    }

    if (timeout) {
      request.timeout = timeout
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
      if (request.status === 0) {
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
      if (response.status >= 200 && response.status < 300) {
        resolve(transformResponseData(response))
      } else {
        reject(new Error(`Request failed with status code ${response.status}`))
      }
    }
    request.onerror = function handleError() {
      reject(new Error('Network Error'))
    }
    request.ontimeout = function handleTimeout() {
      reject(new Error(`Timeout of ${timeout} ms exceeded`))
    }
    request.send(data)
  })
}
