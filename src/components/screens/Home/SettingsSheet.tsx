import React from 'react';
import { List } from 'react-native-paper';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';
import { handleWithSnack } from 'core/utils';
import { BottomSheet } from 'components/common';
import accountStore from 'store/common/account';
import store from 'store/screens/home';

const SettingsSheet = observer(() => {
  const { t } = useTranslation('screens', { keyPrefix: 'home.settingsSheet' });
  return (
    <BottomSheet
      title={t('title')}
      onClose={store.settingsOpenState.close}
      open={store.settingsOpenState.isOpen}
      animationDuration={250}
      scrollViewProps={{ style: { padding: 10 } }}
    >
      {accountStore.user &&
        <List.Item
          title={accountStore.user.username}
          description={accountStore.user.email}
          left={props => <List.Icon {...props} icon="account" />}
          style={{ marginBottom: 10 }}
        />
      }

      <List.Section>
        <List.Subheader>{t('actions')}</List.Subheader>
        <List.Item
          title={t('logout')}
          left={props => <List.Icon {...props} icon="logout" />}
          disabled={accountStore.loggedOut}
          onPress={() => {
            const promise = accountStore.logout();
            handleWithSnack(promise, {
              successMessage: t('logoutSuccess'),
              onSuccess: store.settingsOpenState.close,
              errorMessage: true,
            });
          }}
        />
      </List.Section>

      <List.Section style={{ borderWidth: 1, borderColor: 'rgba(255, 77, 77, .5)' }}>
        <List.Subheader>{t('dangerZone')}</List.Subheader>
        <List.Item
          title={t('deleteAccount')}
          left={props => <List.Icon {...props} icon="delete" />}
          onPress={() => console.warn('not handled')}
        />
      </List.Section>
    </BottomSheet>
  );
});

export default SettingsSheet;
