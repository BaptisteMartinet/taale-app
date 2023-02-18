import React from 'react';
import { observer } from 'mobx-react-lite';
import { Snackbar as SnackbarPaper } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import store from 'store/common/snackbar';

const Snackbar = () => {
  const { t } = useTranslation('common', { keyPrefix: 'snackbar' });
  return (
    <SnackbarPaper
      visible={store.visible}
      onDismiss={() => { store.dismiss(); }}
      duration={store.duration}
      action={{
        label: t('close'),
        onPress: () => { store.dismiss(); },
      }}>
      {store.msg}
    </SnackbarPaper>
  );
};

export default observer(Snackbar);
