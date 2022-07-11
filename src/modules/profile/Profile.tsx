import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSignUpContext } from '../../providers/signUp/SignUpProviders';

const windowWidth = Dimensions.get('window').width;

export const Profile = ({ navigation }: any) => {
  const [text, onChangeText] = useState<string>('');
  const { currentUser } = useSignUpContext();

  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/image/arrow-left.png')}
            style={styles.buttonBack}
          />
        </TouchableOpacity>
        <TextInput
          onChangeText={onChangeText}
          value={text}
          placeholder="Search"
          style={styles.input}
        />
        <TouchableOpacity onPress={() => console.log('LOG:: onPress Settings')}>
          <Image
            source={require('../../assets/image/setting.png')}
            style={styles.imageSettings}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.imageHeader}
        source={require('../../assets/image/background_user_card.png')}
      />
      <Image
        style={styles.imageUser}
        source={require('../../assets/image/photo.jpg')}
      />
      <TouchableOpacity
        onPress={() => console.log('LOG:: onPress user set up')}
      >
        <Image
          style={styles.userSetUp}
          source={require('../../assets/image/Pencil_icon.png')}
        />
      </TouchableOpacity>
      <View style={styles.nameContainer}>
        <Text style={styles.userName}>
          {currentUser.name} {currentUser.lastName}
        </Text>
        <Text style={styles.jobTitle}>job title</Text>
      </View>
      <View style={styles.locationContainer}>
        <Text style={styles.firm}>firm name</Text>
        <Text style={styles.location}>Location</Text>
        <TouchableOpacity onPress={() => console.log('LOG:: onPress friend')}>
          <Text style={styles.friend}>100 friends</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => console.log('LOG:: onPress Интересует')}
          style={styles.buttonInteresting}
        >
          <Text style={styles.textButtonInteresting}>Интересует</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('LOG:: onPress Добавить раздел')}
          style={styles.buttonAddSection}
        >
          <Text style={styles.textButtonAddSection}>Добавить</Text>
          <Text style={styles.textButtonAddSection}>раздел</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('LOG:: onPress Share')}
          style={styles.buttonShare}
        >
          <Text style={styles.textButtonShare}>...</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.borderLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  buttonBack: {
    fontSize: 24,
    paddingLeft: 12,
  },
  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    marginLeft: 12,
    padding: 10,
    borderColor: 'grey',
    backgroundColor: '#EEF3F8',
  },
  imageSettings: {
    marginLeft: 10,
  },
  imageHeader: {
    width: windowWidth,
    height: 80,
  },
  imageUser: {
    width: 100,
    height: 100,
    borderRadius: 50,
    top: -50,
    left: 20,
  },
  userSetUp: {
    position: 'absolute',
    height: 24,
    width: 24,
    top: -85,
    right: 15,
  },
  nameContainer: {
    paddingLeft: 20,
    top: -35,
  },
  userName: {
    fontSize: 25,
    fontWeight: '600',
    color: 'black',
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: '300',
    color: 'black',
  },
  locationContainer: {
    top: -15,
    paddingLeft: 20,
  },
  firm: {
    fontSize: 16,
  },
  location: {
    fontSize: 14,
  },
  friend: {
    fontSize: 16,
    color: 'blue',
    paddingTop: 8,
  },
  borderLine: {
    marginTop: 12,
    width: windowWidth,
    height: 10,
    backgroundColor: 'grey',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
  },
  buttonInteresting: {
    backgroundColor: 'blue',
    borderRadius: 50,
  },
  textButtonInteresting: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 48,
    paddingRight: 48,
    paddingTop: 5,
    paddingBottom: 5,
  },
  buttonAddSection: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 50,
    marginLeft: 10,
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  textButtonAddSection: {
    paddingLeft: 28,
    paddingRight: 28,
  },
  buttonShare: {
    height: 38,
    width: 38,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 50,
    marginLeft: 10,
  },
  textButtonShare: {
    fontSize: 18,
    textAlign: 'center',
  },
});
