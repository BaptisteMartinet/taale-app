import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import accountStore from 'store/common/account';

const ParticipationFab = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { t } = useTranslation('common', { keyPrefix: 'participationFab' });

  return (
    <FAB
      icon="pencil-plus"
      label={t('participate')}
      style={styles.fab}
      onPress={() => {
        if (accountStore.user !== null)
          navigation.navigate('PartialStory');
        else
          navigation.navigate('Login');
      }}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 40,
    bottom: 50,
  },
});

export default ParticipationFab;
