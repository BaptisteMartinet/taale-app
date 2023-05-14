import { Platform } from 'react-native';

export const isMobile = (Platform.OS === 'android' || Platform.OS === 'ios');
export const isWeb = (Platform.OS === 'web');
export const isDesktop = (Platform.OS === 'macos' || Platform.OS === 'windows');
