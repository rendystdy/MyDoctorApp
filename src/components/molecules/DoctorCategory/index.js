// @flow

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ILCatUmum, ILCatPsikiater, ILCatObat, ILCatAnak} from '../../../assets';
import {
  responsiveWidth as rw,
  responsiveFontValue as rf,
  responsiveHeight as rh,
  responsiveBorderRadius as rbr,
} from '../../../utils/Responsive';
import {Colors} from '../../../utils/Colors';
import {FontsType} from '../../../utils/Fonts';

type Props = {
  category: String,
  onPress: Function,
};

const DoctorCategory = ({category, onPress}: Props) => {
  const Icon = () => {
    switch (category) {
      case 'dokter umum':
        return <ILCatUmum style={styles.illustration} />;
      case 'psikiater':
        return <ILCatPsikiater style={styles.illustration} />;
      case 'dokter obat':
        return <ILCatObat style={styles.illustration} />;
      case 'dokter anak':
        return <ILCatAnak style={styles.illustration} />;
      default:
        return <ILCatUmum style={styles.illustration} />;
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
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
