import AsyncStorage from '@react-native-async-storage/async-storage'
import * as SecureStore from 'expo-secure-store';

export interface StorageOptions {
  secure?: true,
}

async function setItem(key: string, value: string, opts: StorageOptions = {}) {
  const { secure } = opts;
  if (secure && (await SecureStore.isAvailableAsync())) {
    return SecureStore.setItemAsync(key, value);
  }
  return AsyncStorage.setItem(key, value);
}

async function getItem(key: string, opts: StorageOptions = {}) {
  const { secure } = opts;
  if (secure && (await SecureStore.isAvailableAsync()))
    return SecureStore.getItemAsync(key);
  return AsyncStorage.getItem(key);
}

async function deleteItem(key: string, opts: StorageOptions = {}) {
  const { secure } = opts;
  if (secure && (await SecureStore.isAvailableAsync()))
    return SecureStore.deleteItemAsync(key);
  return AsyncStorage.removeItem(key);
}

export default {
  setItem,
  getItem,
  deleteItem,
};
