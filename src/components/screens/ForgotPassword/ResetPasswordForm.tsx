import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';

import React from 'react';
import { Keyboard, View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  PasswordMinLength,
  ResetPasswordCodeLength,
} from 'core/constants';
import { handleWithSnack } from 'core/utils';
import accountStore from 'store/common/account';

const validationSchema = Yup.object().shape({
  newPassword: Yup.string().min(PasswordMinLength).required(),
  validationCode: Yup.string().min(ResetPasswordCodeLength).required(),
});

export interface ResetPasswordFormProps {
  email: string,
}

const ResetPasswordForm = (props: ResetPasswordFormProps) => {
  const { email } = props;
  const { t } = useTranslation('screens', { keyPrefix: 'forgotPassword.resetPasswordForm' });
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Formik
      initialValues={{
        newPassword: '',
        validationCode: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const promise = accountStore.resetPassword({ ...values, email });
        return handleWithSnack(promise, {
          successMessage: null,
          onSuccess: () => navigation.navigate('Login'),
          errorMessage: true,
          onError: () => Keyboard.dismiss(),
        });
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
        <View>
          <View style={{ marginBottom: 32 }}>
            <Text variant="headlineLarge">{t('title')}</Text>
            <Text variant="titleSmall">{t('subtitle')}</Text>
          </View>
          <TextInput
            label={t('newPasswordLabel')}
            mode="outlined"
            secureTextEntry
            textContentType="password"
            right={<TextInput.Icon icon="lock" />}
            value={values.newPassword}
            onChangeText={handleChange('newPassword')}
            onBlur={handleBlur('newPassword')}
            error={Boolean(errors.newPassword) && touched.newPassword}
          />
          <TextInput
            label={t('validationCodeLabel')}
            mode="outlined"
            autoCapitalize="characters"
            right={<TextInput.Icon icon="numeric" />}
            maxLength={ResetPasswordCodeLength}
            value={values.validationCode}
            onChangeText={handleChange('validationCode')}
            onBlur={handleBlur('validationCode')}
            error={Boolean(errors.validationCode) && touched.validationCode}
            style={{ marginTop: 10 }}
          />
          <Button
            mode="contained"
            disabled={isSubmitting}
            loading={isSubmitting}
            onPress={() => handleSubmit()}
            style={{ marginTop: 32 }}
          >
            {t('submit')}
          </Button>
        </View>
      )}
    </Formik>
  );
};

export default ResetPasswordForm;
