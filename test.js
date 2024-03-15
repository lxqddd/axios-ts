/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
function matchAll(regExp, str) {
  let matches
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

function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
    return match[0] === '[]' ? '' : match[1] || match[0]
  })
}

console.log(parsePropPath('foo x y z'))
