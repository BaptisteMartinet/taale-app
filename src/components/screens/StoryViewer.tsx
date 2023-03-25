import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';

import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { SentencesList } from 'components/common';

// TODO store

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'StoryViewer'>;

const StoryViewer = (props: NavigationProps) => {
  const { route } = props;
  const { params } = route;
  return (
    <SafeAreaView style={styles.container}>
      <SentencesList sentences={[]} disableControls/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2b2b',
  },
});

export default StoryViewer;
