import { describe, expect, it } from 'vitest'
import { sum } from '.'

describe('1 and 1 to be 2', () => {
  it('should be 2', () => {
    expect(sum(1, 1)).toBe(2)
  })
})
