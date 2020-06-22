// @flow

import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

import {Colors} from '../../../utils/Colors';
import {
  responsiveFontValue as rf,
  responsiveHeight as rh,
} from '../../../utils/Responsive';
import {FontsType} from '../../../utils/Fonts';

const Loading = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color={Colors.STRONG_CYAN} />
      <Text style={styles.text}>Loading ...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BLACK_TRANSPARENT,
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: rf(18),
    color: Colors.STRONG_CYAN,
    fontFamily: FontsType.semiBold,
    marginTop: rh(16),
  },
});
