import { useState } from 'react';
import { UserType } from './types';

const initialValues = {
  name: '',
  lastName: '',
  email: '',
  password: '',
};

export const useSignUp = () => {
  const [currentUser, setCurrentUser] = useState<UserType>(initialValues);

  const saveUser = (values: UserType) => {
    setCurrentUser((prev) => ({
      ...prev,
      ...values,
    }));
  };

  const isLoggedIn: boolean = !!currentUser.name;

  return {
    currentUser,
    initialValues,
    isLoggedIn,
    saveUser,
  };
};
