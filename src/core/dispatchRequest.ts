import type { AxiosRequestConfig, AxiosResponsePromise } from '../types'
import { processConfig } from '../utils/processConfig'
import xhr from './xhr'

export default function dispatchRequest(config: AxiosRequestConfig): AxiosResponsePromise {
  processConfig(config)
  return xhr(config)
}
