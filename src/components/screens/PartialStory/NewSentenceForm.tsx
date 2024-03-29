import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'components/Navigator';

import assert from 'assert';
import React from 'react';
import { StyleSheet, View, Keyboard } from 'react-native';
import { IconButton, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  SentenceTextMinLength,
  SentenceTextMaxLength,
} from 'core/constants';
import { handleWithSnack } from 'core/utils';
import { isMobile } from 'core/device';
import { useKeyboardVisible } from 'core/hooks';
import sentenceStore from 'store/common/sentence';
import store from 'store/screens/partial-story';
import CharsProgress from './CharsProgress';

const NewSentenceSchema = Yup.object().shape({
  text: Yup.string()
    .min(SentenceTextMinLength)
    .max(SentenceTextMaxLength)
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
        assert(lastSentence);
        Keyboard.dismiss();
        const promise = sentenceStore.create({ text, parentSentenceId: lastSentence.id });
        return handleWithSnack(promise, {
          successMessage: null,
          onSuccess: () => {
            actions.resetForm();
            navigation.navigate('ParticipationSuccess');
          },
          errorMessage: true,
        });
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, isSubmitting, values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            mode="outlined"
            placeholder={t('write')}
            multiline
            maxLength={SentenceTextMaxLength}
            value={values.text}
            onChangeText={handleChange('text')}
            onBlur={handleBlur('text')}
            error={Boolean(errors.text) && touched.text}
          />
          {(isKeyboardVisible || !isMobile || values.text.length > 0) &&
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
