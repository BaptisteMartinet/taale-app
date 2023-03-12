import type { RootStackParamList } from 'components/Navigator';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import React from 'react';
import { StyleSheet, View, Keyboard } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { handleWithSnack } from 'core/utils/promises';
import store from 'store/common/account';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Register'>;

const Register = (props: NavigationProps) => {
  const { navigation } = props;
  const { t } = useTranslation('screens', { keyPrefix: 'register' });
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        onSubmit={values => {
          Keyboard.dismiss();
          const promise = store.register(values);
          handleWithSnack(promise, {
            successMessage: null,
            errorMessage: true,
            onSuccess: () => { navigation.navigate('Login'); },
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <View style={styles.formContainer}>
            <View style={styles.headline}>
              <Text variant="headlineLarge">{t('form.headlineTitle')}</Text>
              <Text variant="titleSmall">{t('form.headlineDescription')}</Text>
            </View>
            <TextInput
              label={t<string>('form.username')}
              mode="outlined"
              right={<TextInput.Icon icon="account-circle" />}
              style={styles.textField}
              value={values.username}
              onChangeText={handleChange('username')}
            />
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
              style={styles.button}
              disabled={isSubmitting}
              onPress={() => { handleSubmit(); }}
            >
              {t('form.submit')}
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    marginTop: '40%',
    marginHorizontal: 20,
  },
  headline: {
    marginVertical: 20,
  },
  textField: {
    marginVertical: 5,
  },
  button: {
    marginTop: 20,
  },
});

export default Register;
