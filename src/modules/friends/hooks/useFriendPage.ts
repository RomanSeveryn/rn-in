import { useState } from 'react';
import { useQuery } from 'react-query';
import { getUsers } from '../../../api/basic';
import get from 'lodash/get';
import { FriendType, QueryFriendKey } from '../types';
import { testUserData } from './data';

export const useFriendPage = () => {
  const [users, setUsers] = useState<Array<FriendType>>([]);
  const [text, onChangeText] = useState<string>('');

  useQuery(QueryFriendKey.FRIEND, () => getUsers, {
    onSuccess: (response) => {
      const userArray = get(response, ['data'], []);
      setUsers(userArray);
    },
    onError: () => {
      setUsers(testUserData);
    },
  });

  const filteredUsers: Array<FriendType> = users.filter((user) =>
    user.name.toLowerCase().includes(text.toLowerCase()),
  );

  return { filteredUsers, text, onChangeText };
};
