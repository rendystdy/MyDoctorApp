// @flow

import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ICSend, ICSendInactive} from '../../../assets';
import {Colors} from '../../../utils/Colors';
import {
  responsiveBorderRadius as rbr,
  responsiveWidth as rw,
  responsiveHeight as rh,
} from '../../../utils/Responsive';

type Props = {
  disabled: String,
};

const BtnIconSend = ({disabled}: Props) => {
  return (
    <TouchableOpacity style={styles.container(disabled)}>
      {disabled ? <ICSendInactive /> : <ICSend />}
    </TouchableOpacity>
  );
};

export default BtnIconSend;

const styles = StyleSheet.create({
  container: (disabled) => ({
    backgroundColor: disabled ? Colors.LIGHT_GRAYISH_BLUE : Colors.STRONG_BLUE,
    borderRadius: rbr(10),
    width: rw(45),
    height: rh(45),
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
