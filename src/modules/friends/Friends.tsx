import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { UserCard } from './components/UserCard';
import { useFriendContext } from '../../providers/friend/FriendProvider';
import {
  NavigatorName,
  ProfileName,
} from '../../app/navigator/components/types';

const windowWidth = Dimensions.get('window').width - 75;

export const Friends = ({ navigation }: any) => {
  const { filteredUsers, text, onChangeText, deleteUser } = useFriendContext();

  const open = () => {
    navigation.navigate(NavigatorName.PROFILE_NAVIGATOR, {
      screen: ProfileName.PROFILE_COMPONENT,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => open()}>
          <Image
            style={styles.image}
            source={require('../../assets/image/photo.jpg')}
          />
        </TouchableOpacity>

        <TextInput
          onChangeText={onChangeText}
          value={text}
          placeholder="Search"
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
              lastName={item.username}
              userPhrase={item.company.catchPhrase}
              onDeleteUser={() => deleteUser(item.id)}
              userPhoto={`https://robohash.org/${item.name}`}
              buttonName="x"
            />
          );
        }}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 72,
  },
  input: {
    height: 40,
    width: windowWidth,
    backgroundColor: '#EEF3F8',
    borderColor: 'grey',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  image: {
    width: 30,
    height: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
