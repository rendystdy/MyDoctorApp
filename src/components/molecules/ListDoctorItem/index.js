// @flow

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyDokter1} from '../../../assets';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontValue as rf,
  responsiveBorderRadius as rbr,
} from '../../../utils/Responsive';
import {Colors} from '../../../utils/Colors';
import {FontsType} from '../../../utils/Fonts';

const ListDoctorItem = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDokter1} style={styles.image} />
      <View>
        <Text style={styles.name}>Alexander Jannie</Text>
        <Text style={styles.chat}>
          Baik ibu, terima kasih banyak atas wakt...
        </Text>
      </View>
    </View>
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
