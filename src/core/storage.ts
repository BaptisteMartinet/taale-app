import AsyncStorage from '@react-native-async-storage/async-storage'
import * as SecureStore from 'expo-secure-store';

const secureKeysMemory = new Set<string>();

export interface StorageOptions {
  secure?: true,
}

async function setItem(key: string, value: string, opts: StorageOptions = {}) {
  const { secure } = opts;
  if (secure && (await SecureStore.isAvailableAsync())) {
    secureKeysMemory.add(key);
    return SecureStore.setItemAsync(key, value);
  }
  return AsyncStorage.setItem(key, value);
}

function getItem(key: string) {
  if (secureKeysMemory.has(key))
    return SecureStore.getItemAsync(key);
  return AsyncStorage.getItem(key);
}

function deleteItem(key: string) {
  if (secureKeysMemory.has(key))
    return SecureStore.deleteItemAsync(key);
  return AsyncStorage.removeItem(key);
}

export default {
  setItem,
  getItem,
  deleteItem,
};
