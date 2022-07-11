import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { UserCardType } from '../types';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const UserCard = ({
  name,
  lastName,
  userPhrase,
  onDeleteUser,
  userPhoto,
  buttonName,
}: UserCardType) => {
  const [addContact, setAddContact] = useState<boolean>(false);
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.imageHeader}
          source={require('../../../assets/image/background_user_card.png')}
        />
        <TouchableOpacity onPress={onDeleteUser} style={styles.buttonDelete}>
          <Text style={styles.buttonDeleteText}>{buttonName}</Text>
        </TouchableOpacity>
        <Image style={styles.imagePhoto} source={{ uri: userPhoto }} />
        <View style={styles.containerInfo}>
          <Text style={styles.name} numberOfLines={1}>
            {name} {lastName}
          </Text>
          <Text style={styles.phrase} numberOfLines={2}>
            {userPhrase}
          </Text>
          <Text style={styles.friends} numberOfLines={1}>
            {name.length} общих {name.length > 4 ? 'контактов' : 'контакта'}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => setAddContact((prev) => !prev)}
          style={
            addContact ? styles.buttonAddContactCheck : styles.buttonAddContact
          }
        >
          <Text
            style={
              addContact
                ? styles.buttonAddContactTextCheck
                : styles.buttonAddContactText
            }
          >
            {addContact ? 'На' : 'Установить'}
          </Text>
          <Text
            style={
              addContact
                ? styles.buttonAddContactTextCheck
                : styles.buttonAddContactText
            }
          >
            {addContact ? 'рассмотрении' : 'контакт'}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: (windowWidth * 43.5) / 100,
    height: (windowHeight * 38) / 100,
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 0.25,
  },
  buttonDelete: {
    position: 'absolute',
    width: 24,
    height: 24,
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0, .5)',
    borderRadius: 50,
  },
  buttonDeleteText: { textAlign: 'center', color: 'white' },
  imagePhoto: {
    width: 70,
    height: 70,
    top: -32,
    borderRadius: 50,
  },
  imageHeader: {
    height: 55,
    width: (windowWidth * 43.5) / 100 + 0.25,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  containerInfo: {
    width: 135,
    paddingLeft: 4,
    paddingRight: 4,
  },
  name: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  phrase: {
    textAlign: 'center',
  },
  friends: {
    fontSize: 12,
    textAlign: 'center',
  },
  buttonAddContact: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 50,
    marginTop: 8,
  },
  buttonAddContactCheck: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 50,
    marginTop: 8,
  },
  buttonAddContactText: {
    color: 'blue',
    paddingLeft: 32,
    paddingRight: 32,
    textAlign: 'center',
  },
  buttonAddContactTextCheck: {
    color: 'grey',
    paddingLeft: 24,
    paddingRight: 24,
    textAlign: 'center',
  },
});
