import AsyncStorage from '@react-native-async-storage/async-storage';

import { StorageKeys } from '@EH/constants';

export class AsyncStorageService {
  public static async setItem(key: StorageKeys, value: string) {
    await AsyncStorage.setItem(key, value);
  }
  
  public static async getItem(key: StorageKeys) {
    const value = await AsyncStorage.getItem(key);
    return value;
  }
}
