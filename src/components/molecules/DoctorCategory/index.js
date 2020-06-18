// @flow

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILCatUmum} from '../../../assets';
import {
  responsiveWidth as rw,
  responsiveFontValue as rf,
  responsiveHeight as rh,
  responsiveBorderRadius as rbr,
} from '../../../utils/Responsive';
import {Colors} from '../../../utils/Colors';
import {FontsType} from '../../../utils/Fonts';

type Props = {};

const DoctorCategory = ({}: Props) => {
  return (
    <View style={styles.container}>
      <ILCatUmum style={styles.illustration} />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>dokter umum</Text>
    </View>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    width: rw(100),
    height: rh(130),
    backgroundColor: Colors.LIGHT_GRAYISH_CYAN,
    borderRadius: rbr(10),
    alignSelf: 'flex-start',
    padding: 12,
    marginRight: rw(10),
  },
  illustration: {
    marginBottom: rh(28),
  },
  label: {
    fontSize: rf(12),
    lineHeight: 16,
    color: Colors.VERY_DARK_BLUE,
    fontFamily: FontsType.light,
  },
  category: {
    fontSize: rf(12),
    lineHeight: 16,
    color: Colors.VERY_DARK_BLUE,
    fontFamily: FontsType.semiBold,
  },
});
