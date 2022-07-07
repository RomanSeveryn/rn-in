import { Formik } from 'formik';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { InputComponent } from '../../components/Input/Input';
import { useSignUpContext } from '../../providers/signUp/SignUpProviders';
import { UserType } from './hooks/types';
import { NavigatorName, TabName } from '../../app/navigator/components/types';
import { signUpSchema } from '../../helpers/validation-shemas';

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
        validationSchema={signUpSchema}
        enableReinitialize={true}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => {
          return (
            <View style={styles.container}>
              <InputComponent
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                placeholder="name"
                value={values.name}
                style={styles.input}
                error={errors.name && touched.name}
              />
              <InputComponent
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                placeholder="lastName"
                value={values.lastName}
                style={styles.input}
                error={errors.lastName && touched.lastName}
              />
              <InputComponent
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                placeholder="email"
                value={values.email}
                style={styles.input}
                error={errors.email && touched.email}
              />
              <InputComponent
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                placeholder="password"
                value={values.password}
                style={styles.input}
                error={errors.password && touched.password}
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
