// @flow

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  responsiveFontValue as rf,
  responsiveWidth as rw,
  responsiveHeight as rh,
} from '../../../utils/Responsive';

type Props = {
  width?: number,
  height?: number,
};

const Gap = ({width, height}: Props) => {
  return <View style={styles.container(width, height)} />;
};

export default Gap;

const styles = StyleSheet.create(
  ({
    container: (width = 0, height = 0) => ({
      width: rw(width),
      height: rh(height),
    }),
  }: Object),
);
