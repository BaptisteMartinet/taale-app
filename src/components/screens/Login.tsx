import type { RootStackParamList } from 'components/Navigator';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import React from 'react';
import { StyleSheet, View, Keyboard } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { handleWithSnack } from 'core/utils/promise';
import store from 'store/common/account';

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

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
        validationSchema={LoginValidationSchema}
        onSubmit={values => {
          Keyboard.dismiss();
          const promise = store.login(values);
          handleWithSnack(promise, {
            successMessage: null,
            errorMessage: true,
            onSuccess: () => { navigation.reset({ index: 0, routes: [{ name: 'Home' }]}); },
          });
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched, isSubmitting }) => (
          <View style={styles.formContainer}>
            <View style={styles.headline}>
              <Text variant="headlineLarge">{t('form.headlineTitle')}</Text>
              <Text variant="titleSmall">{t('form.headlineDescription')}</Text>
            </View>
            <TextInput
              label={t('form.email')}
              mode="outlined"
              keyboardType="email-address"
              textContentType="emailAddress"
              right={<TextInput.Icon icon="email" />}
              style={styles.textField}
              value={values.email}
              onChangeText={handleChange('email')}
              error={Boolean(errors.email) && touched.email}
            />
            <TextInput
              label={t('form.password')}
              mode="outlined"
              secureTextEntry
              textContentType="password"
              right={<TextInput.Icon icon="lock" />}
              style={styles.textField}
              value={values.password}
              onChangeText={handleChange('password')}
              error={Boolean(errors.password) && touched.password}
            />
            <Button
              mode="contained"
              style={styles.button}
              disabled={isSubmitting}
              loading={isSubmitting}
              onPress={() => { handleSubmit(); }}
            >
              {t('form.submit')}
            </Button>
            <Button
              mode="text"
              style={styles.button}
              onPress={() => { navigation.navigate('Register'); }}
            >
              {t('form.register')}
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

export default Login;
