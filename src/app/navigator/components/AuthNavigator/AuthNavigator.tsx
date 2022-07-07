import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUp } from '../../../../modules/SignUp/SignUp';
import { TabsNavigator } from '../TabsNavigator/TabsNavigator';
import { AuthName, NavigatorName } from '../types';

const routes: Array<any> = [
  {
    name: AuthName.SIGN_UP,
    component: SignUp,
  },
  {
    name: NavigatorName.TAB_NAVIGATOR,
    component: TabsNavigator,
  },
];

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
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
