import { useAuth } from "@/src/hooks/use-auth"
import LoginIcon from '@mui/icons-material/Login';

export const SignInButton = () => {
  const [signIn] = useAuth()
  return (<button className="flex items-center" onClick={signIn}><LoginIcon />Sign in</button>)
}
