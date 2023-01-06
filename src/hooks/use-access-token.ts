const key = 'NO_SCOPE_GITHUB_ACCESS_TOKEN'

const getFromLocalStorage = (key: string) => {
  if (typeof window === 'undefined') return;

  return localStorage.getItem(key) ?? undefined
}

const setToLocalStorage = (key: string, value: string) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(key, value)
}

export const useAccessToken = () => {
  const accessToken = getFromLocalStorage(key)

  const setAccessToken = (accessToken: string) => {
    setToLocalStorage(key, accessToken)
  }

  return [accessToken, setAccessToken] as const
}
