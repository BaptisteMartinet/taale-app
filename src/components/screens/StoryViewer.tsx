import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';

import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { handleWithSnack } from 'core/utils/promises';
import { SentencesList } from 'components/common';
import store from 'store/screens/story-viewer';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'StoryViewer'>;

const StoryViewer = (props: NavigationProps) => {
  const { storyId } = props.route.params;
  useFocusEffect(() => {
    React.useCallback(() => {
      const promise = store.refresh(storyId);
      handleWithSnack(promise, { successMessage: null, errorMessage: true });
    }, [storyId])
  });
  return (
    <SafeAreaView style={styles.container}>
      <SentencesList sentences={store.story?.sentences ?? []} disableControls />
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
