import type { PropsWithChildren } from 'react';
import type { OpenState } from 'core/utils';

import React from 'react';
import { observer } from 'mobx-react';
import {
  StyleSheet,
  Animated,
  useWindowDimensions,
} from 'react-native';

export interface BottomSheetProps {
  openState: OpenState;
  animationDuration: number;
}

const BottomSheet = observer((props: PropsWithChildren<BottomSheetProps>) => {
  const { openState, animationDuration, children } = props;
  const { height } = useWindowDimensions();
  const sheetHeight = height * 0.5;

  const verticalOffset = React.useRef(new Animated.Value(sheetHeight)).current;
  const openAnimation = React.useRef(
    Animated.timing(verticalOffset, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: true,
    })
  ).current;
  const closeAnimation = React.useRef(
    Animated.timing(verticalOffset, {
      toValue: sheetHeight,
      duration: animationDuration,
      useNativeDriver: true,
    })
  ).current;

  React.useEffect(() => {
    if (openState.isOpen) {
      closeAnimation.stop();
      openAnimation.start();
    } else {
      openAnimation.stop();
      closeAnimation.start();
    }
  }, [openState.isOpen]);

  return (
    <Animated.ScrollView
      style={[
        styles.container,
        {
          height: sheetHeight,
          transform: [{ translateY: verticalOffset }],
        }
      ]}>
      {children}
    </Animated.ScrollView>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'whitesmoke',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20
  },
});

export default BottomSheet;
