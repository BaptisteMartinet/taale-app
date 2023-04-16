import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  SentenceTextMinLength,
  SentenceTextMaxLength,
} from 'core/constants';
import { handleWithSnack } from 'core/utils/promise';
import { useKeyboardVisible } from 'core/hooks';
import sentenceStore from 'store/common/sentence';
import store from 'store/screens/partial-story';
import CharsProgress from './CharsProgress';

const NewSentenceSchema = Yup.object().shape({
  text: Yup.string()
    .min(SentenceTextMinLength, 'Too short')
    .max(SentenceTextMaxLength, 'Too long')
    .required('Required')
});

const NewSentenceForm = () => {
  const { t } = useTranslation('screens', { keyPrefix: 'partialStory' });
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const isKeyboardVisible = useKeyboardVisible();
  return (
    <Formik
      initialValues={{ text: '' }}
      validationSchema={NewSentenceSchema}
      onSubmit={(values, actions) => {
        const { text } = values;
        const { lastSentence } = store;
        if (!lastSentence)
          return;
        const promise = sentenceStore.create({ text, parentSentenceId: lastSentence.id });
        handleWithSnack(promise, {
          successMessage: null,
          onSuccess: () => {
            actions.resetForm();
            navigation.navigate('ParticipationSuccess');
          },
          errorMessage: true,
        });
        return promise;
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, isSubmitting, values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            mode="outlined"
            placeholder={t('write')}
            multiline
            value={values.text}
            onChangeText={handleChange('text')}
            onBlur={handleBlur('text')}
            error={Boolean(errors.text) && touched.text}
          />
          {isKeyboardVisible &&
            <View style={styles.controlsContainer}>
              <CharsProgress maxCharsCount={SentenceTextMaxLength} currentCharsCount={values.text.length} />
              <IconButton
                icon="send"
                disabled={isSubmitting}
                onPress={() => handleSubmit()}
              />
            </View>
          }
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    paddingHorizontal: 4,
  },
  textInput: {
    width: '100%',
    maxHeight: 200,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
});

export default NewSentenceForm;
