type InputQuery = {
  owner: string;
  repository: string;
}

export const parseInputQuery = (value?: string | string[]): InputQuery => {
  if (value instanceof Array || !value) return { owner: '', repository: '' }

  let [owner, repository] = value.split('/')
  owner = owner.trim()
  repository ||= ''
  repository = repository.trim()

  return {
    owner, repository
  }
}
