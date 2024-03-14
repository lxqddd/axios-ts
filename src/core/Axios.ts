import type { Defaults } from '../defaults/index'

/**
 * Create a new instance of Axios
 *
 * @param { Defaults } instanceConfig
 *
 * @returns { Axios }
 */
export class Axios {
  defaults: Defaults
  constructor(private instanceConfig: Defaults) {
    this.defaults = instanceConfig
  }
}
