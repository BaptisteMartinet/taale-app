import React from 'react';
import { Keyboard } from 'react-native';

export default function useKeyboardVisible() {
  const [isKeyboardVisible, setKeyboardVisible] = React.useState(false);
  React.useEffect(() => {
    const showListener = Keyboard.addListener('keyboardWillShow', () => setKeyboardVisible(true));
    const hideListener = Keyboard.addListener('keyboardWillHide', () => setKeyboardVisible(false));
    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);
  return isKeyboardVisible;
}
