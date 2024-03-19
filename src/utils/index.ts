const { toString } = Object.prototype

/**
 * Determines the type of a value
 * @param thing The value to test
 * @returns { string } The type of the value
 */
const kindOf = (cache => (thing: unknown) => {
  const str = toString.call(thing)
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase())
})(Object.create(null))

function kindOfTest(type: string): (thing: unknown) => boolean {
  type = type.toLowerCase()
  return (thing: unknown) => kindOf(thing) === type
}

// eslint-disable-next-line valid-typeof
const typeofTest = (type: string) => (thing: unknown) => typeof thing === type

/**
 * Determines if a value is an object
 * @param thing The value to test
 * @returns { boolean } True if the value is an object, otherwise false
 */
export const isObject = (thing: any): boolean => thing !== null && typeof thing === 'object'

/** Checking if the kindOfTest function returns true when passed an HTMLFormElement */
export const isHTMLForm = kindOfTest('HTMLFormElement')

const isFunction = typeofTest('function')

/**
 * Determines if a value is a FormData object
 * @param thing The value to test
 * @returns { boolean } True if the value is a FormData object, otherwise false
 */
export function isFormData(thing: any): boolean {
  let kind

  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formData'
        || (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
}

/**
 * It takes a regular expression and a string, and returns an array of all matches
 * @param regExp - The regular expression to match against
 * @param str - The string to match
 * @returns { RegExpExecArray[] }
 */
export function matchAll(regExp: RegExp, str: string): RegExpExecArray[] {
  let matches: RegExpExecArray | null
  const arr = []

  while (true) {
    matches = regExp.exec(str)
    if (matches) {
      arr.push(matches)
    } else {
      break
    }
  }
  return arr
}

/**
 * Determines if a value is a Date object
 */
export const isDate = kindOfTest('Date')

/**
 * Determines if a value is a plain object
 */
export const isPlainObject = kindOfTest('Object')

/**
 * transform headers string to object
 * @param headers headers string
 * @returns transformed headers
 */
export function parseHeaders(headers: string) {
  let parsed = Object.create(null)
  if (!headers) {
    return parsed
  }
  headers.split('\r\n').forEach((line) => {
    let [key, val] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    if (val) {
      val = val.trim()
    }
    parsed[key] = val
  })

  return parsed as typeof parsed
}

/**
 * merge object
 * @param to - merge result
 * @param from - merge source
 * @returns - merged result
 */
export function extend<T, U>(to: T, from: U): T & U {
  console.log(from)

  for (const key in from) {
    console.log(key)
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
