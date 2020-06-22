// @flow

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  responsiveBorderRadius as rbr,
  responsiveWidth as rw,
  responsiveFontValue as rf,
  responsiveHeight as rh,
} from '../../../utils/Responsive';
import {FontsType} from '../../../utils/Fonts';
import {Colors} from '../../../utils/Colors';

type Props = {
  title: String,
  name: String,
  address: String,
  images?: Object,
};

const ListHospitals = ({title, name, address, images}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={images} style={styles.images} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.desc}>{address}</Text>
      </View>
    </View>
  );
};

export default ListHospitals;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: Colors.VERY_LIGHT_GRAY,
  },
  images: {
    width: rw(80),
    height: rh(60),
    borderRadius: rbr(11),
    marginRight: rw(16),
  },
  title: {
    fontSize: rf(16),
    lineHeight: 19,
    fontFamily: FontsType.regular,
    color: Colors.VERY_DARK_BLUE,
    maxWidth: rw(151),
  },
  desc: {
    fontSize: rf(12),
    lineHeight: 16,
    fontFamily: FontsType.light,
    color: Colors.DARK_GRAYISH_BLUE,
    marginTop: rh(6),
  },
});
