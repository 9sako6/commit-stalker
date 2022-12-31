import { parseInputQuery } from "@/src/lib/parse-input-query"

describe('parseInputQuery', () => {
  describe('Valid query', () => {
    test('owner/repository', () => {
      expect(parseInputQuery('janedoe/commit-stalker')).toEqual({ owner: 'janedoe', repository: 'commit-stalker' })
    })

    test('owner /repository', () => {
      expect(parseInputQuery('janedoe /commit-stalker')).toEqual({ owner: 'janedoe', repository: 'commit-stalker' })
    })

    test('owner / repository', () => {
      expect(parseInputQuery('janedoe /commit-stalker')).toEqual({ owner: 'janedoe', repository: 'commit-stalker' })
    })
  })

  describe('Invalid query', () => {
    test('owner', () => {
      expect(parseInputQuery('janedoe')).toEqual({ owner: 'janedoe', repository: '' })
    })

    test('empty string', () => {
      expect(parseInputQuery('')).toEqual({ owner: '', repository: '' })
    })

    test('owner//repository', () => {
      expect(parseInputQuery('owner//repository')).toEqual({ owner: 'owner', repository: '' })
    })

    test('string array', () => {
      expect(parseInputQuery(['owner', 'repository'])).toEqual({ owner: '', repository: '' })
    })

    test('undefined', () => {
      expect(parseInputQuery()).toEqual({ owner: '', repository: '' })
    })
  })
})
