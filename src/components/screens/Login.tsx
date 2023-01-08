import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Formik } from 'formik';

const Login = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => { console.log(values); }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View>
            <TextInput
              label="Email"
              mode="outlined"
              right={<TextInput.Icon icon="email" />}
              style={styles.textField}
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <TextInput
              label="Password"
              mode="outlined"
              secureTextEntry
              right={<TextInput.Icon icon="lock" />}
              style={styles.textField}
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Button
              mode="contained"
              style={styles.submitButton}
              onPress={() => { handleSubmit(); }}
            >
              Sign in
            </Button>
          </View>
        )}
      </Formik>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  textField: {
    marginVertical: 5,
  },
  submitButton: {
    marginTop: 20,
  },
});

export default Login;
