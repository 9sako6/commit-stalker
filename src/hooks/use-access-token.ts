const key = 'NO_SCOPE_GITHUB_ACCESS_TOKEN'

const getFromSessionStorage = (key: string) => {
  if (typeof window === 'undefined') return;

  return sessionStorage.getItem(key) ?? undefined
}

const setToSessionStorage = (key: string, value: string) => {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(key, value)
}

const removeFromSessionStorage = (key: string) => {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem(key)
}

export const useAccessToken = () => {
  const accessToken = getFromSessionStorage(key)

  const setAccessToken = (accessToken: string) => {
    setToSessionStorage(key, accessToken)
  }

  const removeAccessToken = () => {
    removeFromSessionStorage(key)
  }

  return [accessToken, setAccessToken, removeAccessToken] as const
}
