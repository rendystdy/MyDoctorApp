// @flow

import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DummyUser} from '../../../assets';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontValue as rf,
} from '../../../utils/Responsive';
import {Colors} from '../../../utils/Colors';
import {FontsType} from '../../../utils/Fonts';

type Props = {
  onPress: Function,
};

const HomeProfile = ({onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={DummyUser} style={styles.image} />
      <View>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.job}>Product Designer</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    width: rw(174),
    height: rh(46),
    flexDirection: 'row',
  },
  image: {
    width: rw(46),
    height: rh(46),
    borderRadius: 46 / 2,
    marginRight: rw(12),
  },
  name: {
    fontSize: rf(16),
    lineHeight: 22,
    color: Colors.VERY_DARK_BLUE,
    fontFamily: FontsType.semiBold,
  },
  job: {
    fontSize: rf(12),
    lineHeight: 16,
    color: Colors.DARK_GRAYISH_BLUE,
    fontFamily: FontsType.regular,
  },
});
