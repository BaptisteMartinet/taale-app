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
import { useHeaderHeight } from '@react-navigation/elements';
import store from 'store/screens/partial-story';
import { SentencesList } from 'components/common';
import NewSentenceForm from './NewSentenceForm';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'PartialStory'>;

const PartialStory = observer((props: NavigationProps) => {
  const { navigation } = props;
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={headerHeight}
      >
        <View style={styles.container}>
          <SentencesList
            sentences={store.partialStory ?? []}
            onReport={() => navigation.navigate('ParticipationSuccess')}
            onMarkedCompleted={() => navigation.navigate('ParticipationSuccess')}
          />
          <NewSentenceForm/>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PartialStory;
