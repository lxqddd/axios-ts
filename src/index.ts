import xhr from './core/xhr'
import type { AxiosRequestConfig } from './types'
import { processConfig } from './utils/processConfig'

function axios(config: AxiosRequestConfig) {
  config = processConfig(config)
  xhr(config)
}

export default axios
