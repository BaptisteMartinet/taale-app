import React from 'react';
import { Platform, Keyboard } from 'react-native';

// Note: keyboardWill[Show/Hide] events are not supported on Android
const ShowEventName = Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';
const HideEventName = Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';

export default function useKeyboardVisible() {
  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);
  React.useEffect(() => {
    const showListener = Keyboard.addListener(ShowEventName, () => setKeyboardVisible(true));
    const hideListener = Keyboard.addListener(HideEventName, () => setKeyboardVisible(false));
    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);
  return isKeyboardVisible;
}
