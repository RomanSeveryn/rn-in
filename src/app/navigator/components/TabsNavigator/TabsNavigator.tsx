import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Friends } from '../../../../modules/friends/Friends';
import { Text } from 'react-native';

const Tabs = createBottomTabNavigator();

const Feed = () => {
  return (
    <>
      <Text>FEED11</Text>
    </>
  );
};

const tabs: Array<any> = [
  {
    name: 'Главная',
    component: Feed,
    icon: () => <Text>A</Text>,
  },
  {
    name: 'Сеть',
    component: Friends,
    icon: () => <Text>B</Text>,
  },
  {
    name: 'Публикация',
    component: Feed,
    icon: () => <Text>C</Text>,
  },
  {
    name: 'Уведоммления',
    component: Feed,
    icon: () => <Text>D</Text>,
  },
  {
    name: 'Вакансии',
    component: Feed,
    icon: () => <Text>E</Text>,
  },
];

export const TabsNavigator = () => (
  <Tabs.Navigator initialRouteName={'Home'}>
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
