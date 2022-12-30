import { useInputQuery } from "@/src/hooks/use-input-query";

describe('useInputQuery', () => {
  describe('Valid query', () => {
    test('owner/repository', () => {
      expect(useInputQuery('janedoe/commit-stalker')).toEqual({ owner: 'janedoe', repository: 'commit-stalker' })
    })

    test('owner /repository', () => {
      expect(useInputQuery('janedoe /commit-stalker')).toEqual({ owner: 'janedoe', repository: 'commit-stalker' })
    })

    test('owner / repository', () => {
      expect(useInputQuery('janedoe /commit-stalker')).toEqual({ owner: 'janedoe', repository: 'commit-stalker' })
    })
  })

  describe('Invalid query', () => {
    test('owner', () => {
      expect(useInputQuery('janedoe')).toEqual({ owner: 'janedoe', repository: '' })
    })

    test('empty string', () => {
      expect(useInputQuery('')).toEqual({ owner: '', repository: '' })
    })

    test('owner//repository', () => {
      expect(useInputQuery('owner//repository')).toEqual({ owner: 'owner', repository: '' })
    })
  })
})
