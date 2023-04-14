import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';

import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { handleWithSnack } from 'core/utils/promise';
import { SentencesList } from 'components/common';
import store from 'store/screens/story-viewer';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'StoryViewer'>;

const StoryViewer = observer((props: NavigationProps) => {
  const { storyId } = props.route.params;
  useFocusEffect(
    React.useCallback(() => {
      const promise = store.refresh(storyId);
      handleWithSnack(promise, { successMessage: null, errorMessage: true });
    }, [storyId])
  );
  const { t } = useTranslation('screens', { keyPrefix: 'storyViewer' });
  const story = store.story.result;

  return (
    <SafeAreaView style={styles.container}>
      <SentencesList
        data={story?.sentences}
        disableControls
        style={styles.sentencesList}
        ListHeaderComponent={
          (story?.createdAt !== undefined ? (
            <Text variant="labelMedium" style={styles.dateHeader}>
              {`${t('completedTitle')} ${format(story.createdAt, t('dateFormat'))}`}
            </Text>
          ) : null)
        }
      />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sentencesList: {
    padding: 20,
  },
  dateHeader: {
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default StoryViewer;
