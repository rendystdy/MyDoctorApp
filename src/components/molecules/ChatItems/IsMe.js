// @flow

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  responsiveHeight as rh,
  responsiveFontValue as rf,
  responsiveWidth as rw,
  responsiveBorderRadius as rbr,
} from '../../../utils/Responsive';
import {Colors} from '../../../utils/Colors';
import {FontsType} from '../../../utils/Fonts';

type Props = {
  chatIsMe: string,
  dateIsMe?: string,
};

const IsMe = ({chatIsMe, dateIsMe}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{chatIsMe}</Text>
      </View>
      <Text style={styles.date}>4.20 AM</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {
    marginBottom: rh(20),
    paddingRight: rw(16),
    alignItems: 'flex-end',
  },
  content: {
    backgroundColor: Colors.LIGHT_GRAYISH_CYAN,
    borderRadius: rbr(10),
    borderBottomRightRadius: rbr(0),
    maxWidth: '70%',
    padding: 12,
    paddingRight: rw(18),
  },
  text: {
    fontSize: rh(14),
    color: Colors.VERY_DARK_BLUE,
    lineHeight: 17,
    fontFamily: FontsType.regular,
  },
  date: {
    fontSize: rh(11),
    color: Colors.DARK_GRAYISH_BLUE,
    lineHeight: 13,
    fontFamily: FontsType.regular,
    marginTop: rh(8),
  },
});
