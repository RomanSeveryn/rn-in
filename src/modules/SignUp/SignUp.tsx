import { Formik } from 'formik';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { InputComponent } from '../../components/Input/Input';
import { useSignUpContext } from '../../providers/signUp/SignUpProviders';
import { UserType } from './hooks/types';
import { NavigatorName, TabName } from '../../app/navigator/components/types';

export const SignUp = ({ navigation }: any) => {
  const { initialValues, saveUser } = useSignUpContext();

  const formSubmit = (values: UserType) => {
    saveUser(values);
    navigation.navigate(NavigatorName.TAB_NAVIGATOR, {
      screen: TabName.MAIN,
    });
  };
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => formSubmit(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => {
          return (
            <View style={styles.container}>
              <InputComponent
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                placeholder="name"
                value={values.name}
                style={styles.input}
              />
              <InputComponent
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                placeholder="lastName"
                value={values.lastName}
                style={styles.input}
              />
              <InputComponent
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                placeholder="email"
                value={values.email}
                style={styles.input}
              />
              <InputComponent
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                placeholder="password"
                value={values.password}
                style={styles.input}
              />
              <Button onPress={handleSubmit} title="Join Now" />
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  input: {
    paddingLeft: 14,
  },
});
