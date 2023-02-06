import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { InnerScreens } from './components/InnerScreens/InnerScreens';
import { useSignUpContext } from '../../providers/signUp/SignUpProviders';
import { AuthNavigator } from './components/AuthNavigator/AuthNavigator';

export const AppNavigator = () => {
  const { isLoggedIn } = useSignUpContext();

  return (
    <NavigationContainer>
      {isLoggedIn ? <InnerScreens /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
