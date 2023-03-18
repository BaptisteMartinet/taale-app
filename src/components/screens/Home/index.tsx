import type { RootStackParamList } from 'components/Navigator';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { FAB } from 'react-native-paper';
import { observer } from 'mobx-react';
import accountStore from 'store/common/account';
import store from 'store/screens/home';
import { SentencesList } from 'components/common';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = observer((props: NavigationProps) => {
  const { navigation } = props;
  const { t } = useTranslation('screens', { keyPrefix: 'home' });
  return (
    <View style={styles.container}>
      <SentencesList sentences={store.dailyStory?.sentences ?? []} disableControls/>
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
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2b2b',
  },
  fab: {
    position: 'absolute',
    right: 40,
    bottom: 50,
  },
});

export default Home;