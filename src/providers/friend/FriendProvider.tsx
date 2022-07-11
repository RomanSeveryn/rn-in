import React, { createContext, useContext } from 'react';
import { useFriendPage } from '../../modules/friends/hooks/useFriendPage';
import { FriendType } from '../../modules/friends/types';

type FriendContextType = {
  filteredUsers: Array<FriendType>;
  text: string;
  onChangeText: (e: string) => void;
  deleteUser: (id: number) => void;
};

const FriendContext = createContext<FriendContextType>(
  null as unknown as FriendContextType,
);

export const useFriendContext = () => {
  return useContext(FriendContext);
};

export const FriendProvider = ({ children }: { children: React.ReactNode }) => {
  const { filteredUsers, text, onChangeText, deleteUser } = useFriendPage();
  return (
    <FriendContext.Provider
      value={{
        filteredUsers,
        text,
        onChangeText,
        deleteUser,
      }}
    >
      {children}
    </FriendContext.Provider>
  );
};
