import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Friends } from '../../../../modules/friends/Friends';
import { Text } from 'react-native';
import { TabName } from '../types';

const Tabs = createBottomTabNavigator();

export const Feed = () => {
  return (
    <>
      <Text>FEED11</Text>
    </>
  );
};

const tabs: Array<any> = [
  {
    name: TabName.MAIN,
    component: Feed,
    icon: () => <Text>A</Text>,
  },
  {
    name: TabName.FRIENDS,
    component: Friends,
    icon: () => <Text>B</Text>,
  },
  {
    name: TabName.PUBLICATIONS,
    component: Feed,
    icon: () => <Text>C</Text>,
  },
  {
    name: TabName.NOTIFICATIONS,
    component: Feed,
    icon: () => <Text>D</Text>,
  },
  {
    name: TabName.VACANCIES,
    component: Feed,
    icon: () => <Text>E</Text>,
  },
];

export const TabsNavigator = () => (
  <Tabs.Navigator initialRouteName={TabName.MAIN}>
    {tabs.map((tab, i) => {
      return (
        <Tabs.Screen
          key={i}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarIcon: () => {
              const Icon = tab.icon;
              return <Icon />;
            },
            headerShown: false,
          }}
        />
      );
    })}
  </Tabs.Navigator>
);
