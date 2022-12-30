import { parseInputPage } from "@/src/lib/parse-input-page"

describe('parseInputPage', () => {
  describe('Valid page', () => {
    test('1', () => {
      expect(parseInputPage('1')).toEqual({page: 1 })
    })

    test('12', () => {
      expect(parseInputPage('12')).toEqual({ page: 12 })
    })
  })

  describe('Invalid page', () => {
    test('0', () => {
      expect(parseInputPage('0')).toEqual({ page: 1 })
    })

    test('empty string', () => {
      expect(parseInputPage('')).toEqual({ page: 1 })
    })

    test('string array', () => {
      expect(parseInputPage(['1', '10'])).toEqual({ page: 1 })
    })

    test('undefined', () => {
      expect(parseInputPage()).toEqual({ page: 1 })
    })
  })
})
