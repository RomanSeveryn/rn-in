import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { useQuery } from 'react-query';
import { getUsers } from '../../api/basic';
import { logger } from 'react-native-logs';
import get from 'lodash/get';
import { UserCard } from './components/UserCard';

export const Friends = () => {
  let log = logger.createLogger();
  const [users, setUsers] = useState([]);
  useQuery('friends', () => getUsers, {
    onSuccess: (response) => {
      log.info('Friends.response', response);
      const res = get(response, ['data'], []);
      log.info('Friends.res', res);
      setUsers(res);
    },
  });

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <UserCard
            name={item.name}
            lastName={item?.username}
            userPhrase={item?.company?.catchPhrase}
            onDeleteUser={() => console.log('123')}
            userPhoto={`https://robohash.org/${item.name}`}
            buttonName="X"
          />
        );
      }}
      numColumns={2}
      style={{
        margin: 15,
      }}
    />
  );
};
