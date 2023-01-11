import React from 'react';
import { observer } from 'mobx-react-lite';
import { Snackbar as SnackbarPaper } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import store from 'store/common/snackbar';

const Snackbar = () => {
  const { visible, msg, duration } = store;
  const { t } = useTranslation('common', { keyPrefix: 'snackbar' });
  return (
    <SnackbarPaper
      visible={visible}
      onDismiss={() => { store.dismiss(); }}
      duration={duration}
      action={{
        label: t('close'),
        onPress: () => { store.dismiss(); },
      }}>
      {msg}
    </SnackbarPaper>
  );
};

export default observer(Snackbar);
