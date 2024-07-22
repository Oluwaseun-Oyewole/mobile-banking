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
  fromCurrency?: string;
  toCurrency?: string;
  changeFromCurrencyType: (arg: string) => void;
  changeToCurrencyType: (arg: string) => void;
  isBiometricSupported?: boolean;
  updateBiometric: (arg: boolean) => void;
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
  fromCurrency: "USD",
  toCurrency: "NGN",
  changeFromCurrencyType: () => {},
  changeToCurrencyType: () => {},
  isBiometricSupported: false,
  updateBiometric: () => {},
};

export const AuthContext = createContext<InitialStatesType>(initialValues);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [[isLoading, session], setSession] = useStorageState("session");
  const [currentUser, setCurrentUser] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NGN");
  const changeFromCurrencyType = (currency: string) => {
    return setFromCurrency(currency);
  };
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const changeToCurrencyType = (currency: string) => {
    return setToCurrency(currency);
  };
  function updateCurrentUser() {
    setCurrentUser(true);
  }
  function updateIsPhoneValidity() {
    setIsPhoneValid(true);
  }

  function updateBiometric(biometric: boolean) {
    setIsBiometricSupported(biometric);
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
        fromCurrency,
        toCurrency,
        changeFromCurrencyType,
        changeToCurrencyType,
        isBiometricSupported,
        updateBiometric,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
