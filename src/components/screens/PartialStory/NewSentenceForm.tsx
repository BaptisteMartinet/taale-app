import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, TextInput } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { handleWithSnack } from 'core/utils/promises';
import sentenceStore from 'store/common/sentence';
import store from 'store/screens/partial-story';

const NewSentenceForm = () => {
  const { t } = useTranslation('screens', { keyPrefix: 'partialStory' });
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Formik
      initialValues={{ text: '' }}
      onSubmit={(values) => {
        const { text } = values;
        const { lastSentence } = store;
        if (!lastSentence)
          return;
        const promise = sentenceStore.create({ text, parentSentenceId: lastSentence.id });
        handleWithSnack(promise, {
          successMessage: t('writeSuccess'),
          onSuccess: () => {
            navigation.navigate('ParticipationSuccess');
          },
          errorMessage: true,
        });
      }}
    >
      {({ handleSubmit, handleChange, isSubmitting, values }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            mode="outlined"
            placeholder={t('write')}
            multiline
            value={values.text}
            onChangeText={handleChange('text')}
          />
          <View style={styles.iconWrapper}>
            <IconButton
              style={styles.icon}
              icon="send"
              disabled={isSubmitting}
              onPress={() => handleSubmit()}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 4,
  },
  textInput: {
    flex: 0.85,
    maxHeight: 200,
  },
  iconWrapper: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  icon: {
    width: '100%',
    aspectRatio: 1,
  },
});

export default NewSentenceForm;
