import type { PropsWithChildren } from 'react';

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { isMobile } from 'core/utils/device';

const WebContainer = (props: PropsWithChildren<{}>) => {
  const { children } = props;
  if (isMobile)
    return <React.Fragment>{children}</React.Fragment>;
  return (
    <View style={styles.container}>
      <View style={styles.appWrapper}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  appWrapper: {
    width: 360,
    height: 'auto',
    aspectRatio: 6 / 13,
    margin: 'auto',
    overflow: 'hidden',
    borderRadius: 32,
  },
});

export default WebContainer;
