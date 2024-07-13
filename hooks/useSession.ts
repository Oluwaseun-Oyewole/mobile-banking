import { AuthContext } from "@/context";
import { useContext } from "react";

export const useSession = () => {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }
  return value;
};
