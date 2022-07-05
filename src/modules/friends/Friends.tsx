import React from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import { UserCard } from './components/UserCard';
import { useFriendContext } from '../../providers/friend/FriendProvider';

export const Friends = () => {
  const { filteredUsers, text, onChangeText } = useFriendContext();

  return (
    <>
      <View>
        <TextInput
          onChangeText={onChangeText}
          value={text}
          placeholder="Поиск"
          style={styles.input}
        />
      </View>
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <UserCard
              name={item.name}
              lastName={item?.username}
              userPhrase={item?.company?.catchPhrase}
              onDeleteUser={() => console.log('LOG:: onDeleteUser')}
              userPhoto={`https://robohash.org/${item.name}`}
              buttonName="X"
            />
          );
        }}
        numColumns={2}
        style={styles.margin}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  margin: {
    margin: 15,
  },
});
