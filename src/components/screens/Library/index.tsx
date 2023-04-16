import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';

import React from 'react';
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native';
import { Text } from 'react-native-paper';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';
import { handleWithSnack } from 'core/utils/promise';
import store from 'store/screens/library';
import StoryPreview from './StoryPreview';
import EmptyLibrary from './EmptyLibrary';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'Library'>;

const Library = observer((props: NavigationProps) => {
  const { t } = useTranslation('screens', { keyPrefix: 'library' });
  return (
    <View style={styles.container}>
      <FlatList
        data={store.stories.result}
        renderItem={({ item }) => <StoryPreview story={item} />}
        keyExtractor={item => item.id.toString()}
        refreshControl={
          <RefreshControl
            refreshing={store.stories.loading}
            onRefresh={() => {
              const promise = store.refresh();
              handleWithSnack(promise, { successMessage: null, errorMessage: true });
            }}
          />
        }
        ListHeaderComponent={
          <Text
            variant="labelLarge"
            style={styles.infoText}
          >
            {t('pageInfo', { sentencesCount: store.mySentencesCount.lastResult })}
          </Text>
        }
        ListEmptyComponent={<EmptyLibrary />}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  infoText: {
    marginVertical: 20,
  },
});

export default Library;
