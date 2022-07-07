import React, { createContext, useContext } from 'react';
import { useSignUp } from '../../modules/SignUp/hooks/useSignUp';
import { UserType } from '../../modules/SignUp/hooks/types';

type SignUpContextType = {
  currentUser: UserType;
  initialValues: UserType;
  isLoggedIn: boolean;
  saveUser: (user: UserType) => void;
};

const SignUpContext = createContext<SignUpContextType>(
  null as unknown as SignUpContextType,
);

export const useSignUpContext = () => {
  return useContext(SignUpContext);
};

export const SignUpProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { currentUser, initialValues, isLoggedIn, saveUser } = useSignUp();
  return (
    <SignUpContext.Provider
      value={{
        currentUser,
        initialValues,
        isLoggedIn,
        saveUser,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};
