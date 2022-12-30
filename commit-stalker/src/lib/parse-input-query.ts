type InputQuery = {
  owner: string;
  repository: string;
}

export const parseInputQUery = (value: string): InputQuery => {
  let [owner, repository] = value.split('/')
  owner = owner.trim()
  repository ||= ''
  repository = repository.trim()

  return {
    owner, repository
  }
}
