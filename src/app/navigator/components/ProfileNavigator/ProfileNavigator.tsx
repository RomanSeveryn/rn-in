import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileName } from '../types';
import { Profile } from '../../../../modules/profile/Profile';

const Stack = createNativeStackNavigator();

const routes: Array<any> = [
  {
    name: ProfileName.PROFILE_COMPONENT,
    component: Profile,
  },
];
export const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      {routes.map((route, i) => {
        return (
          <Stack.Screen
            key={i}
            name={route.name}
            component={route.component}
            options={route.options || { headerShown: false }}
          />
        );
      })}
    </Stack.Navigator>
  );
};
