import Axios from './core/Axios'
import type { AxiosInstance } from './types'
import { extend } from './utils'

function createInstance(): AxiosInstance {
  const context = new Axios()
  const prototype = Object.getPrototypeOf(context)
  const instance = Axios.prototype.request.bind(prototype)
  extend(instance, prototype)

  return instance as AxiosInstance
}

const axios = createInstance()

export default axios
