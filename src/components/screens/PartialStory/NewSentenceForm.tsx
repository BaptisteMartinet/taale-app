import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, TextInput } from 'react-native-paper';

// TODO texts

const NewSentenceForm = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        mode="outlined"
        placeholder="Écrire"
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
