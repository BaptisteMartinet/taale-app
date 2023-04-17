import type { PropsWithChildren } from 'react';
import type { ScrollViewProps } from 'react-native';

import React from 'react';
import {
  StyleSheet,
  Animated,
  useWindowDimensions,
  View,
  ScrollView,
} from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { observer } from 'mobx-react';

export interface BottomSheetProps {
  open: boolean;
  onClose: () => void;
  animationDuration: number;
  title: string;
  scrollViewProps?: ScrollViewProps;
}

const BottomSheet = observer((props: PropsWithChildren<BottomSheetProps>) => {
  const { open, onClose, animationDuration, title, scrollViewProps, children } = props;
  const { height } = useWindowDimensions();
  const sheetHeight = height * 0.75;

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
    if (open)
      openAnimation.start();
    else
      closeAnimation.start();
  }, [open]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          height: sheetHeight,
          transform: [{ translateY: verticalOffset }],
        }
      ]}
    >
      <View style={styles.header}>
        <Text variant="titleLarge" style={styles.title}>{title}</Text>
        <IconButton icon="close" size={32} style={styles.closeBtn} onPress={onClose} />
      </View>
      <ScrollView {...scrollViewProps}>
        {children}
      </ScrollView>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#1a1a1d',
    borderRadius: 16,
    overflow: 'hidden',
  },
  header: {
    width: '100%',
    backgroundColor: '#110f15',
    paddingVertical: 16,
  },
  title: {
    textAlign: 'center',
    color: 'whitesmoke',
  },
  closeBtn: {
    position: 'absolute',
    color: 'whitesmoke',
    top: 2,
    right: 2,
  },
});

export default BottomSheet;
