import type { ModalProps } from 'react-native-paper';

import React from 'react';
import { StyleSheet } from 'react-native';
import { Modal, Text, TextInput, Button } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

export interface ValidationCodeModalProps extends Omit<ModalProps, 'children' | 'theme' | 'contentContainerStyle' | 'dismissable'> {
  codeLength: number;
  onCodeChange?: (code: string) => void;
  onCodeCompleted?: (code: string) => void;
  onResendCode: () => void;
}

const CodeValidationModal = (props: ValidationCodeModalProps) => {
  const { codeLength, onCodeChange, onCodeCompleted, onResendCode, ...passedProps } = props;
  const { t } = useTranslation('common', { keyPrefix: 'codeValidationModal' });
  const [codeTextInputDisabled, setCodeTextInputDisabled] = React.useState(false);
  const [resendBtnDisabled, setResendBtnDisabled] = React.useState(false);
  const placeholderStr = React.useMemo(() => ''.padStart(codeLength, '-'), [codeLength]);

  return (
    <Modal {...passedProps} dismissable={false} contentContainerStyle={styles.container}>
      <Text variant="titleLarge" style={styles.title}>{t('title')}</Text>
      <Text variant="titleSmall" style={styles.subtitle}>{t('subTitle')}</Text>
      <TextInput
        mode="outlined"
        textAlign="center"
        placeholder={placeholderStr}
        style={styles.codeInput}
        textContentType="oneTimeCode"
        keyboardType="number-pad"
        maxLength={codeLength}
        onChangeText={text => {
          onCodeChange?.(text);
          if (text.length >= codeLength) {
            setCodeTextInputDisabled(true);
            onCodeCompleted?.(text);
          }
        }}
        disabled={codeTextInputDisabled}
      />
      <Button
        icon="reload"
        style={styles.resendCodeBtn}
        onPress={() => {
          setCodeTextInputDisabled(false);
          setResendBtnDisabled(true);
          setTimeout(() => {
            setResendBtnDisabled(false);
          }, 30000);
          onResendCode();
        }}
        disabled={resendBtnDisabled}
      >
        {t('resendCode')}
      </Button>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#404040',
    padding: 20,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#333333'
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subtitle: {
    marginBottom: 20,
  },
  codeInput: {
    fontSize: 32,
    height: 64,
    textAlign: 'center',
  },
  resendCodeBtn: {
    marginTop: 25
  },
});

export default CodeValidationModal;
