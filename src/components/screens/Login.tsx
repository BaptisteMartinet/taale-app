import type { RootStackParamList } from 'App';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Keyboard } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { handleWithSnack } from 'core/utils/errors';
import store from 'store/common/account';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = (props: NavigationProps) => {
  const { navigation } = props;
  const { t } = useTranslation('screens', { keyPrefix: 'login' });
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => {
          Keyboard.dismiss();
          const promise = store.login(values);
          handleWithSnack(promise, {
            successMessage: null,
            errorMessage: t('defaultError'),
            onSuccess: () => { navigation.replace('Home'); },
          });
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View>
            <TextInput
              label={t<string>('form.email')}
              mode="outlined"
              keyboardType="email-address"
              right={<TextInput.Icon icon="email" />}
              style={styles.textField}
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <TextInput
              label={t<string>('form.password')}
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
              {t('form.submit')}
            </Button>
          </View>
        )}
      </Formik>
      <StatusBar style='auto' />
    </View>
  );
};

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
