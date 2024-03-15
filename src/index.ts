import xhr from './core/xhr'
import type { AxiosRequestConfig } from './types'

function axios(config: AxiosRequestConfig) {
  xhr(config)
}

console.log('hello world')
export default axios
