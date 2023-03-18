import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, TextInput } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

const NewSentenceForm = () => {
  const { t} = useTranslation('screens', { keyPrefix: 'partialStory' });
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        mode="outlined"
        placeholder={t('write')}
        multiline
      />
      <View style={styles.iconWrapper}>
        <IconButton
          style={styles.icon}
          icon="send"
          onPress={() => { console.log('sending...'); }}
        />
      </View>
    </View>
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
