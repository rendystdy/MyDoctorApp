// @flow

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  responsiveFontValue as rf,
  responsiveHeight as rh,
  responsiveWidth as rw,
} from '../../../utils/Responsive';
import {Colors} from '../../../utils/Colors';
import {FontsType} from '../../../utils/Fonts';

type Props = {
  title: String,
  desc: String,
};

const ProfileItems = ({title, desc}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

export default ProfileItems;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: Colors.VERY_LIGHT_GRAY,
    padding: rh(16),
  },
  title: {
    fontSize: rf(14),
    lineHeight: 19,
    color: Colors.DARK_GRAYISH_BLUE,
    fontFamily: FontsType.regular,
    marginBottom: rh(6),
  },
  desc: {
    fontSize: rf(14),
    lineHeight: 19,
    color: Colors.VERY_DARK_BLUE,
    fontFamily: FontsType.regular,
  },
});
