export const splitTitleBody = (text: string) => {
  const [title, ...lines] = text.split('\n')

  return [title, lines ? lines.join('\n') : '']
}
