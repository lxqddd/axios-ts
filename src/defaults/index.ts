import transitionalDefaults from './transitional'

export const defaults = {
  adapter: ['xhr', 'http'],
  transitional: transitionalDefaults
}
export type Defaults = typeof defaults
