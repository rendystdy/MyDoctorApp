// @flow

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {DummyNews1} from '../../../assets';
import {
  responsiveFontValue as rf,
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveBorderRadius as rbr,
} from '../../../utils/Responsive';
import {FontsType} from '../../../utils/Fonts';
import {Colors} from '../../../utils/Colors';

type Props = {};

const NewsItem = ({}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.day}>Today</Text>
      </View>
      <Image source={DummyNews1} style={styles.images} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Colors.VERY_LIGHT_GRAY,
    paddingBottom: rh(12),
    paddingTop: rh(16),
    paddingHorizontal: rw(16),
  },
  wrapperTitle: {
    flex: 1,
  },
  title: {
    fontSize: rf(16),
    fontFamily: FontsType.semiBold,
    lineHeight: 22,
    color: Colors.VERY_DARK_BLUE,
    maxWidth: '90%',
    marginBottom: rh(4),
  },
  day: {
    fontSize: rf(12),
    fontFamily: FontsType.regular,
    lineHeight: 16,
    color: Colors.DARK_GRAYISH_BLUE,
    marginBottom: rh(12),
  },
  images: {
    width: rw(80),
    height: rh(60),
    borderRadius: rbr(11),
  },
});
