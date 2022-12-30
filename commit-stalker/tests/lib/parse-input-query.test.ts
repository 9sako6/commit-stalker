import { parseInputQUery } from "@/src/lib/parse-input-query"

describe('parseInputQUery', () => {
  describe('Valid query', () => {
    test('owner/repository', () => {
      expect(parseInputQUery('janedoe/commit-stalker')).toEqual({ owner: 'janedoe', repository: 'commit-stalker' })
    })

    test('owner /repository', () => {
      expect(parseInputQUery('janedoe /commit-stalker')).toEqual({ owner: 'janedoe', repository: 'commit-stalker' })
    })

    test('owner / repository', () => {
      expect(parseInputQUery('janedoe /commit-stalker')).toEqual({ owner: 'janedoe', repository: 'commit-stalker' })
    })
  })

  describe('Invalid query', () => {
    test('owner', () => {
      expect(parseInputQUery('janedoe')).toEqual({ owner: 'janedoe', repository: '' })
    })

    test('empty string', () => {
      expect(parseInputQUery('')).toEqual({ owner: '', repository: '' })
    })

    test('owner//repository', () => {
      expect(parseInputQUery('owner//repository')).toEqual({ owner: 'owner', repository: '' })
    })
  })
})
