import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

export const InputComponent = ({ ...rest }: any) => {
  return (
    <View style={styles.container}>
      <TextInput {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 24,
  },
});
