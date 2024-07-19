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
  isPhoneValid?: boolean;
  updateIsPhoneValidity: VoidFunction;
};

const initialValues: InitialStatesType = {
  signIn: () => {},
  signOut: () => {},
  isLoading: false,
  session: null,
  currentUser: false,
  updateCurrentUser: () => {},
  isPhoneValid: false,
  updateIsPhoneValidity: () => {},
};

export const AuthContext = createContext<InitialStatesType>(initialValues);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [[isLoading, session], setSession] = useStorageState("session");
  const [currentUser, setCurrentUser] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  function updateCurrentUser() {
    setCurrentUser(true);
  }

  function updateIsPhoneValidity() {
    setIsPhoneValid(true);
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
        isPhoneValid,
        updateIsPhoneValidity,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
