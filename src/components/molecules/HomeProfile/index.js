// @flow

import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DummyUser} from '../../../assets';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontValue as rf
} from '../../../utils/Responsive';
import {Colors} from '../../../utils/Colors';
import {FontsType} from '../../../utils/Fonts';

type Props = {
  onPress?: Function,
  profile: Object,
  name: string,
  desc: string
};

const HomeProfile = ({onPress, profile, name, desc}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={profile} style={styles.image} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.job}>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    width: rw(174),
    height: rh(46),
    flexDirection: 'row'
  },
  image: {
    width: rw(46),
    height: rh(46),
    borderRadius: 46 / 2,
    marginRight: rw(12)
  },
  name: {
    fontSize: rf(16),
    lineHeight: 22,
    color: Colors.VERY_DARK_BLUE,
    fontFamily: FontsType.semiBold,
    textTransform: 'capitalize'
  },
  job: {
    fontSize: rf(12),
    lineHeight: 16,
    color: Colors.DARK_GRAYISH_BLUE,
    fontFamily: FontsType.regular,
    textTransform: 'capitalize'
  }
});
