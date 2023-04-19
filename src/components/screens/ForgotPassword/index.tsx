import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';

import React from 'react';
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import ForgotPasswordForm from './ForgotPasswordForm';
import ResetPasswordForm from './ResetPasswordForm';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>;

const ForgotPassword = (props: NavigationProps) => {
  const headerHeight = useHeaderHeight();
  const [email, setEmail] = React.useState<string | null>(null);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={headerHeight}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          {email === null ? (
            <ForgotPasswordForm onEmailSubmited={(email) => { setEmail(email); }} />
          ) : <ResetPasswordForm email={email} />}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default ForgotPassword;
