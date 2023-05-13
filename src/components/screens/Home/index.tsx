import type { RootStackParamList } from 'components/Navigator';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import React from 'react';
import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native';
import { observer } from 'mobx-react';
import { handleWithSnack } from 'core/utils/promise';
import store from 'store/screens/home';
import { ParticipationFab } from 'components/common';
import Hero from './Hero';
import Statistics from './Statistics';
import DailyStory from './DailyStory';
import MyLibrary from './MyLibrary';
import SettingsSheet from './SettingsSheet';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = observer((props: NavigationProps) => {
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
      <ParticipationFab />
      <SettingsSheet />
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