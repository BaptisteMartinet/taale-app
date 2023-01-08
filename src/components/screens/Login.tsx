import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          label="Email"
          mode="outlined"
          secureTextEntry
          right={<TextInput.Icon icon="email" />}
        />
        <TextInput
          label="Password"
          secureTextEntry
          right={<TextInput.Icon icon="lock" />}
        />
        <Button
          mode="contained"
          onPress={() => { console.log('coucou'); }}
        >Coucou</Button>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  form: {},
});

export default Login;
