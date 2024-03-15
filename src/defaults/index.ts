import * as utils from '../utils/index'
import transitionalDefaults from './transitional'

export const defaults = {
  adapter: ['xhr', 'http'],
  transitional: transitionalDefaults,
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || ''
    const hasJSONContentType = contentType.includes('application/json')
    const isObjectPayload = utils.isObject(data)

    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data)
    }
    const isFormData = utils.isFormData(data)
    if (isFormData) {
      return hasJSONContentType ? JSON.stringify(formDataToJson(data)) : data
    }
  }]
}
export type Defaults = typeof defaults
