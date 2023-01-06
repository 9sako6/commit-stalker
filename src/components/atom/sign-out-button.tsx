import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from "@/src/hooks/use-auth";

export const SignOutButton = () => {
  const [_, signOut] = useAuth()
  return (<button className="flex items-center" onClick={signOut}><LogoutIcon />Sign out</button>)
}
