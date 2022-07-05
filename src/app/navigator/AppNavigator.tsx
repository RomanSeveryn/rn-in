import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { InnerScreens } from './components/InnerScreens/InnerScreens';
import { FriendProvider } from '../../providers/friend/FriendProvider';

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <FriendProvider>
        <InnerScreens />
      </FriendProvider>
    </NavigationContainer>
  );
};
