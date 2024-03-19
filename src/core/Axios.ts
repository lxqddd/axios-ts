import type { AxiosRequestConfig, AxiosResponsePromise, Method } from '../types'
import dispatchRequest from './dispatchRequest'

// export default class Axios {
//   request(config: AxiosRequestConfig): AxiosResponsePromise {
//     return dispatchRequest(config)
//   }

//   get(url: string, config: AxiosRequestConfig): AxiosResponsePromise {
//     return this._requestMethodWithoutData('get', url, config)
//   }

//   post(url: string, data: any, config: AxiosRequestConfig): AxiosResponsePromise {
//     return this._requestMethodWithData('post', url, data, config)
//   }

//   delete(url: string, config: AxiosRequestConfig): AxiosResponsePromise {
//     return this._requestMethodWithoutData('delete', url, config)
//   }

//   head(url: string, config: AxiosRequestConfig): AxiosResponsePromise {
//     return this._requestMethodWithoutData('head', url, config)
//   }

//   options(url: string, config: AxiosRequestConfig): AxiosResponsePromise {
//     return this._requestMethodWithoutData('options', url, config)
//   }

//   put(url: string, data: any, config: AxiosRequestConfig): AxiosResponsePromise {
//     return this._requestMethodWithData('put', url, data, config)
//   }

//   patch(url: string, data: any, config: AxiosRequestConfig): AxiosResponsePromise {
//     return this._requestMethodWithData('patch', url, data, config)
//   }

//   _requestMethodWithoutData(method: Method, url: string, config: AxiosRequestConfig): AxiosResponsePromise {
//     return this.request(Object.assign(config || {}, {
//       url, method
//     }))
//   }

//   _requestMethodWithData(method: Method, url: string, data: any, config: AxiosRequestConfig): AxiosResponsePromise {
//     return this.request(Object.assign(config || {}, {
//       url, method, data
//     }))
//   }
// }

export default function Axios() {

}

function request(config: AxiosRequestConfig): AxiosResponsePromise {
  return dispatchRequest(config)
}

function requestMethodWithoutData(method: Method, url: string, config: AxiosRequestConfig): AxiosResponsePromise {
  return request(Object.assign(config || {}, {
    url, method
  }))
}

function requestMethodWithData(method: Method, url: string, data: any, config: AxiosRequestConfig): AxiosResponsePromise {
  return request(Object.assign(config || {}, {
    url, method, data
  }))
}

Axios.prototype.request = request
Axios.prototype.get = function (url: string, config: AxiosRequestConfig): AxiosResponsePromise {
  return requestMethodWithoutData('get', url, config)
}
Axios.prototype.post = function (url: string, data: any, config: AxiosRequestConfig): AxiosResponsePromise {
  return requestMethodWithData('post', url, data, config)
}

Axios.prototype.delete = function (url: string, config: AxiosRequestConfig): AxiosResponsePromise {
  return requestMethodWithoutData('delete', url, config)
}

Axios.prototype.head = function (url: string, config: AxiosRequestConfig): AxiosResponsePromise {
  return requestMethodWithoutData('head', url, config)
}

Axios.prototype.options = function (url: string, config: AxiosRequestConfig): AxiosResponsePromise {
  return requestMethodWithoutData('options', url, config)
}

Axios.prototype.put = function (url: string, data: any, config: AxiosRequestConfig): AxiosResponsePromise {
  return requestMethodWithData('put', url, data, config)
}

Axios.prototype.patch = function (url: string, data: any, config: AxiosRequestConfig): AxiosResponsePromise {
  return requestMethodWithData('patch', url, data, config)
}
