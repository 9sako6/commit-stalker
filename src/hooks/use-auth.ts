import { getAuth, signInWithPopup, GithubAuthProvider, connectAuthEmulator } from "firebase/auth";
import { useAccessToken } from "./use-access-token";

export const useAuth = () => {
  const provider = new GithubAuthProvider()
  const [_, setAccessToken] = useAccessToken()
  const auth = getAuth()
  const signIn = () => signInWithPopup(auth, provider)
    .then(result => {
      const credential = GithubAuthProvider.credentialFromResult(result)
      const accessToken = credential?.accessToken
      if (accessToken) {
        setAccessToken(accessToken)
      }
    })

  return signIn
}
