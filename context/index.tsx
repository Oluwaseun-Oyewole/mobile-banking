import { useStorageState } from "@/hooks/useStorageState";
import React, { PropsWithChildren, useState } from "react";

import { createContext } from "react";

type InitialStatesType = {
  signIn: () => void;
  signOut: () => void;
  isLoading: boolean;
  session: string | null;
  currentUser: boolean;
  updateCurrentUser: () => void;
};

const initialValues: InitialStatesType = {
  signIn: () => {},
  signOut: () => {},
  isLoading: false,
  session: null,
  currentUser: false,
  updateCurrentUser: () => {},
};

export const AuthContext = createContext<InitialStatesType>(initialValues);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [[isLoading, session], setSession] = useStorageState("session");
  const [currentUser, setCurrentUser] = useState(false);

  function updateCurrentUser() {
    setCurrentUser(!currentUser);
  }

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          setSession("XXX");
        },
        signOut: () => {
          setSession(null);
        },
        isLoading,
        session,
        currentUser,
        updateCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
