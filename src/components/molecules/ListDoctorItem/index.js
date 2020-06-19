// @flow

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import {DummyDokter1, ICChevronRight} from '../../../assets';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontValue as rf,
  responsiveBorderRadius as rbr,
} from '../../../utils/Responsive';
import {Colors} from '../../../utils/Colors';
import {FontsType} from '../../../utils/Fonts';

type Props = {
  name: String,
  desc: String,
  images: String,
  type: String,
  onPress: Function,
};

const ListDoctorItem = ({name, desc, images, type, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={images} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.chat}>{desc}</Text>
      </View>
      {type === 'next' && <ICChevronRight />}
    </TouchableOpacity>
  );
};

export default ListDoctorItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.VERY_LIGHT_GRAY,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
  image: {
    width: rw(46),
    height: rh(46),
    borderRadius: rbr(46 / 2),
    marginRight: rw(12),
  },
  nane: {
    fontSize: rf(16),
    color: Colors.VERY_DARK_BLUE,
    fontFamily: FontsType.regular,
    lineHeight: 22,
  },
  chat: {
    fontSize: rf(12),
    color: Colors.DARK_GRAYISH_BLUE,
    fontFamily: FontsType.light,
    lineHeight: 16,
  },
});
