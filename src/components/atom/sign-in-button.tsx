import { useAuth } from "@/src/hooks/use-auth"

export const SignInButton = () => {
  const signIn = useAuth()
  return (<button onClick={signIn}>Sign in</button>)
}
