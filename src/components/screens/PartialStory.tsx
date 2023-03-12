import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';

import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, View } from 'react-native';
import store from 'store/screens/partial-story';
import { SentencesList } from 'components/common';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'PartialStory'>;

const PartialStory = observer((props: NavigationProps) => {
  return (
    <View style={styles.container}>
      <SentencesList sentences={store.partialStory ?? []} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PartialStory;
