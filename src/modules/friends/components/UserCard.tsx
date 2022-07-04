import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const windowWidth = (Dimensions.get('window').width * 43.5) / 100;
const windowHeight = (Dimensions.get('window').height * 35) / 100;

export const UserCard = ({
  name,
  lastName,
  userPhrase,
  onDeleteUser,
  userPhoto,
  buttonName,
}: any) => {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.imageHeader}
          source={require('../../../assets/image/background_user_card.png')}
        />
        <TouchableOpacity onPress={onDeleteUser} style={styles.buttonDelete}>
          <Text>{buttonName}</Text>
        </TouchableOpacity>
        <Image style={styles.imagePhoto} source={{ uri: userPhoto }} />
        <View>
          <Text>{name}</Text>
          <Text>{lastName}</Text>
        </View>
        <Text>{userPhrase}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: windowWidth,
    height: windowHeight,
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 0.25,
  },
  buttonDelete: {
    position: 'absolute',
    padding: 4,
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0, .5)',
    borderRadius: 10,
  },
  imagePhoto: {
    width: 70,
    height: 70,
    top: -32,
    borderRadius: 50,
  },
  imageHeader: {
    height: 55,
    width: windowWidth + 0.25,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
