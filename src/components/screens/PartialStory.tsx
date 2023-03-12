import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SentencesList } from 'components/common';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'PartialStory'>;

const PartialStory = (props: NavigationProps) => {
  return (
    <View style={styles.container}>
      <SentencesList sentences={[]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PartialStory;
