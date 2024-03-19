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

export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosResponsePromise extends Promise<AxiosResponse> { }

export interface AxiosError extends Error {
  config: AxiosRequestConfig
  code?: string
  request?: any
  response?: AxiosResponse
  isAxiosError: boolean
}

export interface Axios {
  request(config: AxiosRequestConfig): AxiosResponsePromise
  get(url: string, config?: AxiosRequestConfig): AxiosResponsePromise
  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosResponsePromise
  delete(url: string, config?: AxiosRequestConfig): AxiosResponsePromise
  head(url: string, config?: AxiosRequestConfig): AxiosResponsePromise
  options(url: string, config?: AxiosRequestConfig): AxiosResponsePromise
  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosResponsePromise
  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosResponsePromise
}

export interface AxiosInstance extends Axios {
  (config: AxiosRequestConfig): AxiosResponsePromise
}
