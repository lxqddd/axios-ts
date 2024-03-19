import type { AxiosRequestConfig, AxiosResponse } from '../types'

class AxiosError extends Error {
  constructor(public message: string, public config: AxiosRequestConfig, public code?: string | null, public request?: any, public response?: AxiosResponse, public isAxiosError: boolean = true) {
    super(message)
    this.config = config
    this.code = code
    this.request = request
    this.response = response
    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}

/**
 * create a new axios error instance
 * @param message - error message
 * @param config = axios config
 * @param code - status code
 * @param request - request config
 * @param response - response data
 * @returns axios - error instance
 */
export function createError(message: string, config: AxiosRequestConfig, code?: string | null, request?: any, response?: AxiosResponse) {
  return new AxiosError(message, config, code, request, response)
}
