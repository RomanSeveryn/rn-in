import React from 'react';
import { TabsNavigator } from '../TabsNavigator/TabsNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigatorName } from '../types';

const Stack = createNativeStackNavigator();

const routes: Array<any> = [
  {
    name: NavigatorName.TAB_NAVIGATOR,
    component: TabsNavigator,
  },
];

export const InnerScreens = () => {
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
