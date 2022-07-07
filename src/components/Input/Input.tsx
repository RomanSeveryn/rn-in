import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

export const InputComponent = ({ error, ...rest }: any) => {
  return (
    <>
      <View
        style={
          error
            ? { ...styles.container, ...styles.errorContainer }
            : styles.container
        }
      >
        <TextInput placeholderTextColor={error ? 'red' : 'grey'} {...rest} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 24,
  },
  errorContainer: {
    borderColor: 'red',
  },
});
