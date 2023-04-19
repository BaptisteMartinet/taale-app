import React from 'react';
import { Keyboard, View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { handleWithSnack } from 'core/utils';
import accountStore from 'store/common/account';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
});

export interface ForgotPasswordFormProps {
  onEmailSubmited: (email: string) => void,
}

const ForgotPasswordForm = (props: ForgotPasswordFormProps) => {
  const { onEmailSubmited } = props;
  const { t } = useTranslation('screens', { keyPrefix: 'forgotPassword.forgotPasswordForm' });

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const { email } = values;
        const promise = accountStore.forgotPassword({ email });
        return handleWithSnack(promise, {
          successMessage: null,
          onSuccess: () => onEmailSubmited(email),
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
            label={t('emailLabel')}
            mode="outlined"
            keyboardType="email-address"
            textContentType="emailAddress"
            right={<TextInput.Icon icon="email" />}
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            error={Boolean(errors.email) && touched.email}
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

export default ForgotPasswordForm;
