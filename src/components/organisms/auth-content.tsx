import { useUser } from "@/src/hooks/use-user";
import { SignInButton } from "../atom/sign-in-button";
import { SignOutButton } from "../atom/sign-out-button";

export const AuthContent = () => {
  const { isLoading, user } = useUser();

  return (
    <div>
      {(isLoading || !user) && <SignInButton />}
      {user && (
        <div className="flex gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="your GitHub icon"
            src={user.photoURL || ""}
            className="w-6 rounded-full"
          ></img>
          <SignOutButton />
        </div>
      )}
    </div>
  );
};
