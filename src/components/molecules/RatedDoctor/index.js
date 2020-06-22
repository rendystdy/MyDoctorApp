// @flow

import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DummyDokter1, ICStarRated} from '../../../assets';
import {Colors} from '../../../utils/Colors';
import {
  responsiveBorderRadius as rbr,
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontValue as rf,
} from '../../../utils/Responsive';
import {FontsType} from '../../../utils/Fonts';

type Props = {
  name: String,
  title: String,
  onPress: Function,
  images: String,
};

const RatedDoctor = ({name, title, onPress, images}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={images} style={styles.images} />
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <View style={styles.wrapperStarRated}>
        <ICStarRated />
        <ICStarRated />
        <ICStarRated />
        <ICStarRated />
        <ICStarRated />
      </View>
    </TouchableOpacity>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: rh(16),
  },
  images: {
    width: rw(50),
    height: rh(50),
    borderRadius: rbr(50 / 2),
    marginRight: rw(12),
  },
  name: {
    fontSize: rf(16),
    fontFamily: FontsType.semiBold,
    color: Colors.VERY_DARK_BLUE,
    lineHeight: 22,
  },
  title: {
    fontSize: rf(12),
    fontFamily: FontsType.regular,
    color: Colors.VERY_DARK_BLUE,
    lineHeight: 16,
  },
  wrapper: {flex: 1},
  wrapperStarRated: {flexDirection: 'row', alignItems: 'center'},
});
