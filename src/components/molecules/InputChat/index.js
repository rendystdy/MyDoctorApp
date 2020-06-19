// @flow

import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Colors} from '../../../utils/Colors';
import {
  responsiveBorderRadius as rbr,
  responsiveFontValue as rf,
  responsiveHeight as rh,
  responsiveWidth as rw,
} from '../../../utils/Responsive';
import {FontsType} from '../../../utils/Fonts';
import {Button} from '../../atoms';

type Props = {};

const InputChat = ({}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Tulis pesan untuk Nairobi" style={styles.input} />
      <Button type="btn-icon-send" disabled />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.LIGHT_GRAYISH_BLUE,
    padding: 14,
    borderRadius: rbr(10),
    flex: 1,
    fontFamily: FontsType.regular,
    marginRight: rw(10),
    fontSize: rf(14),
    maxHeight: rh(45),
  },
});
