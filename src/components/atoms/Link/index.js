// @flow

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FontsType} from '../../../utils/Fonts';
import {Colors} from '../../../utils/Colors';
import {
  responsiveFontValue as rf,
  responsiveWidth as rw,
  responsiveHeight as rh,
} from '../../../utils/Responsive';

type Props = {
  label: String,
  fontSize: Number,
  textAlign: String,
};

const Link = ({label, fontSize, textAlign}: Props) => {
  return (
    <View>
      <Text style={styles.title(fontSize, textAlign)}>{label}</Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  title: (fontSize = 0, textAlign) => ({
    fontFamily: FontsType.regular,
    fontSize: rf(fontSize),
    lineHeight: rh(16),
    textDecorationLine: 'underline',
    color: Colors.DARK_GRAYISH_BLUE,
    textAlign: textAlign,
  }),
});
