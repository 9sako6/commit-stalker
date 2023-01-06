import { connectAuthEmulator, getAuth, signOut } from "firebase/auth";

export const SignOutButton = () => {
  const auth = getAuth()
  return (<button onClick={() => signOut(auth)}>Sign out</button>)
}
