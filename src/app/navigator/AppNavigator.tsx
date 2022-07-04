import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { InnerScreens } from './components/InnerScreens/InnerScreens';

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <InnerScreens />
    </NavigationContainer>
  );
};
