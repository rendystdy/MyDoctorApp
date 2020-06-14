// @flow

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Gap = ({width, height}) => {
  return <View style={styles.container(width, height)} />;
};

export default Gap;

const styles = StyleSheet.create({
  container: (width, height) => ({
    width: width,
    height: height,
  }),
});
