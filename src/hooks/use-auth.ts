import { getAuth, signInWithPopup, GithubAuthProvider, connectAuthEmulator, signOut as fbSignOut } from "firebase/auth";
import { useAccessToken } from "./use-access-token";

export const useAuth = () => {
  const provider = new GithubAuthProvider()
  const [_, setAccessToken, removeAccessToken] = useAccessToken()
  const auth = getAuth()
  const signIn = () => signInWithPopup(auth, provider)
    .then(result => {
      const credential = GithubAuthProvider.credentialFromResult(result)
      const accessToken = credential?.accessToken
      if (accessToken) {
        setAccessToken(accessToken)
      }
    })
  const signOut = () => {
    removeAccessToken()
    fbSignOut(auth)
  }

  return [signIn, signOut] as const
}
