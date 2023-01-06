import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { createFirebaseApp } from "../firebase";

type UserAuth = {
  user?: User;
  isLoading: boolean;
};

export const UserContext = createContext<UserAuth>({ isLoading: true });

type Props = {
  children?: ReactNode;
};

export function UserProvider({ children }: Props) {
  createFirebaseApp();
  const auth = getAuth();
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          setUser(user);
        } else {
          setUser(undefined);
        }
      } catch (_error) {
        // console.error(_error);
      } finally {
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}
