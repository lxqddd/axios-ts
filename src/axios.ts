import xhr from './core/xhr'
import type { AxiosRequestConfig, AxiosResponsePromise } from './types'
import { processConfig } from './utils/processConfig'

function axios(config: AxiosRequestConfig): AxiosResponsePromise {
  config = processConfig(config)
  return xhr(config)
}

export default axios
