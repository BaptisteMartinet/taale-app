import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';
import type { RegisterVariables } from 'store/common/account/api';

import assert from 'assert';
import React from 'react';
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {
  TextInput,
  HelperText,
  Button,
  Text,
} from 'react-native-paper';
import { useHeaderHeight } from '@react-navigation/elements';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { handleWithSnack } from 'core/utils/promise';
import {
  UsernameMinLength,
  UsernameMaxLength,
  UsernameValidationRegex,
  PasswordMinLength,
  EmailVerificationCodeLength,
} from 'core/constants';
import { CodeValidationModal } from 'components/common';
import store from 'store/common/account';

const RegisterValidationSchema = Yup.object().shape({
  username: Yup.string().min(UsernameMinLength).max(UsernameMaxLength).matches(UsernameValidationRegex).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(PasswordMinLength).required(),
});

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Register'>;

const Register = (props: NavigationProps) => {
  const { navigation } = props;
  const { t } = useTranslation('screens', { keyPrefix: 'register' });
  const headerHeight = useHeaderHeight();
  const [codeValidationModalOpen, setCodeValidationModalOpen] = React.useState(false);
  const registerVariablesRef = React.useRef<Omit<RegisterVariables, 'emailValidationCode'> | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={headerHeight}
        style={{ flex: 1, justifyContent: 'center' }}
      >
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
          }}
          validationSchema={RegisterValidationSchema}
          onSubmit={values => {
            const { email } = values;
            Keyboard.dismiss();
            registerVariablesRef.current = values;
            const promise = store.verifyEmail({ email });
            return handleWithSnack(promise, {
              successMessage: null,
              onSuccess: () => setCodeValidationModalOpen(true),
              errorMessage: true,
            });
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
            <View style={styles.formContainer}>
              <View style={styles.headline}>
                <Text variant="headlineLarge">{t('form.headlineTitle')}</Text>
                <Text variant="titleSmall">{t('form.headlineDescription')}</Text>
              </View>
              <TextInput
                label={t('form.username')}
                mode="outlined"
                textContentType="username"
                right={<TextInput.Icon icon="account-circle" />}
                value={values.username}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                error={Boolean(errors.username) && touched.username}
              />
              {Boolean(errors.username) && touched.username && <HelperText type="error">{t('form.usernameHelper')}</HelperText>}
              <TextInput
                label={t('form.email')}
                mode="outlined"
                keyboardType="email-address"
                textContentType="emailAddress"
                right={<TextInput.Icon icon="email" />}
                style={styles.textField}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
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
                onBlur={handleBlur('password')}
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
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
      <CodeValidationModal
        visible={codeValidationModalOpen}
        codeLength={EmailVerificationCodeLength}
        onResendCode={() => {
          const email = registerVariablesRef.current?.email;
          assert(email !== undefined)
          const promise = store.resendEmailVerificationCode({ email });
          handleWithSnack(promise, {
            successMessage: null,
            errorMessage: true,
          });
        }}
        onCodeCompleted={(emailValidationCode) => {
          assert(registerVariablesRef.current !== null);
          const promise = store.register({
            emailValidationCode,
            ...registerVariablesRef.current,
          });
          handleWithSnack(promise, {
            successMessage: t('form.registerSuccess'),
            onSuccess: () => {
              setCodeValidationModalOpen(false);
              navigation.navigate('Login');
            },
            errorMessage: true,
          });
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    marginHorizontal: 20,
  },
  headline: {
    marginBottom: 20,
  },
  textField: {
    marginVertical: 5,
  },
  button: {
    marginTop: 20,
  },
});

export default Register;
