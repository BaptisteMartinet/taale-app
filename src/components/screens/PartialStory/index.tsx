import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';

import React from 'react';
import { observer } from 'mobx-react';
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import { Text } from 'react-native-paper';
import { useHeaderHeight } from '@react-navigation/elements';
import { useTranslation } from 'react-i18next';
import store from 'store/screens/partial-story';
import { SentencesList } from 'components/common';
import NewSentenceForm from './NewSentenceForm';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'PartialStory'>;

const PartialStory = observer((props: NavigationProps) => {
  const { navigation } = props;
  const { t } = useTranslation('screens', { keyPrefix: 'partialStory' });
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={headerHeight}
      >
        <View style={styles.container}>
          <SentencesList
            style={styles.sentenceList}
            data={store.partialStory.result}
            onReport={() => navigation.navigate('ParticipationSuccess')}
            onMarkedCompleted={() => navigation.navigate('ParticipationSuccess')}
            ListHeaderComponent={
              <Text variant="labelMedium" style={styles.listInfoHeader}>
                {t('listInfoHeader')}
              </Text>
            }
          />
          <NewSentenceForm />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  sentenceList: {
    paddingHorizontal: 20,
  },
  listInfoHeader: {
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default PartialStory;
