import { splitTitleBody } from "@/src/lib/split-title-body";

describe('splitTitleBody', () => {
  test('splitTitleBody', () => {
    const [title, body] = splitTitleBody("Title\naaa\nbbb\nccc")

    expect(title).toEqual('Title')
    expect(body).toEqual('aaa\nbbb\nccc')
  })

  test('one line input', () => {
    const [title, body] = splitTitleBody("Title")

    expect(title).toEqual('Title')
    expect(body).toEqual('')
  })
})

