// @flow

import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Colors} from '../../../utils/Colors';
import {FontsType} from '../../../utils/Fonts';
import {
  responsiveFontValue as rf,
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveBorderRadius as rbr
} from '../../../utils/Responsive';

type Props = {
  label: String,
};

const Input = ({label}: Props) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: rw(280),
    height: rh(45),
    borderWidth: 1,
    borderColor: Colors.VERY_LIGHT_GRAY,
    borderRadius: rbr(10),
    padding: 12,
  },
  label: {
    fontSize: 16,
    fontFamily: FontsType.regular,
    color: Colors.DARK_GRAYISH_BLUE,
    lineHeight: 22,
    marginBottom: rh(6),
  },
});
