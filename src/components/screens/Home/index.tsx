import type { RootStackParamList } from 'components/Navigator';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native';
import { FAB } from 'react-native-paper';
import { observer } from 'mobx-react';
import { handleWithSnack } from 'core/utils/promise';
import accountStore from 'store/common/account';
import store from 'store/screens/home';
import Hero from './Hero';
import Statistics from './Statistics';
import DailyStory from './DailyStory';
import MyLibrary from './MyLibrary';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = observer((props: NavigationProps) => {
  const { navigation } = props;
  const { t } = useTranslation('screens', { keyPrefix: 'home' });
  return (
    <View style={styles.container}>
      <ScrollView refreshControl={
        <RefreshControl
          refreshing={store.dailyStory.loading || store.statistics.loading}
          onRefresh={() => {
            const promise = store.pullRefresh();
            handleWithSnack(promise, { successMessage: null, errorMessage: true });
          }}
        />
      }>
        <Hero />
        <View style={styles.cardsContainer}>
          {store.dailyStory.lastResult && <DailyStory />}
          <MyLibrary />
          <Statistics />
        </View>
      </ScrollView>
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
  },
  cardsContainer: {
    paddingHorizontal: 10,
  },
  fab: {
    position: 'absolute',
    right: 40,
    bottom: 50,
  },
});

export default Home;