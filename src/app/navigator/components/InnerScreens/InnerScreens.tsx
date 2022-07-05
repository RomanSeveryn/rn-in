import React from 'react';
import { TabsNavigator } from '../TabsNavigator/TabsNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const routes: Array<any> = [
  {
    name: 'HOME',
    component: TabsNavigator,
  },
];

export const InnerScreens = () => {
  return (
    <Stack.Navigator>
      {routes.map((route, i) => (
        <Stack.Screen
          key={i}
          name={route.name}
          component={route.component}
          options={route.options || { headerShown: false }}
        />
      ))}
    </Stack.Navigator>
  );
};
