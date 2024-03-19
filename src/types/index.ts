export type Method = 'get' | 'GET' | 'delete' | 'Delete' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH'

export interface AxiosRequestConfig {
  url?: string
  method: Method
  data?: any
  params?: any
  headers?: { [key: string]: any }
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

export interface AxiosResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosResponsePromise<T = any> extends Promise<AxiosResponse<T>> { }

export interface AxiosError extends Error {
  config: AxiosRequestConfig
  code?: string
  request?: any
  response?: AxiosResponse
  isAxiosError: boolean
}

export interface AxiosConstructor {
  new(): AxiosInstance
  prototype: AxiosPrototype
}

interface AxiosPrototype {
  request<T = any>(config: AxiosRequestConfig): AxiosResponsePromise<T>
  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosResponsePromise<T>
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosResponsePromise<T>
  delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosResponsePromise<T>
  head<T = any>(url: string, config?: AxiosRequestConfig): AxiosResponsePromise<T>
  options<T = any>(url: string, config?: AxiosRequestConfig): AxiosResponsePromise<T>
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosResponsePromise<T>
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosResponsePromise<T>

}

export interface AxiosInstance extends AxiosPrototype {
  <T = any>(config: AxiosRequestConfig): AxiosResponsePromise<T>
  <T = any>(url: string, config?: AxiosRequestConfig): AxiosResponsePromise<T>
}

export interface ResponseData<T = any> {
  code: number
  result: T
  message: string
}

function Person() {

}

Person.prototype.say = function () {
  console.log('hello')
}
