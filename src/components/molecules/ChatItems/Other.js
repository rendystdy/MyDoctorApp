// @flow

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {
  responsiveHeight as rh,
  responsiveFontValue as rf,
  responsiveWidth as rw,
  responsiveBorderRadius as rbr,
} from '../../../utils/Responsive';
import {Colors} from '../../../utils/Colors';
import {FontsType} from '../../../utils/Fonts';
import {DummyDokter1} from '../../../assets';

type Props = {
  chatOther: string,
};

const Other = ({chatOther}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={DummyDokter1} style={styles.profile} />
      <View>
        <View style={styles.content}>
          <Text style={styles.text}>{chatOther}</Text>
        </View>
        <Text style={styles.date}>4.45 AM</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    marginBottom: rh(20),
    paddingLeft: rw(16),
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  content: {
    backgroundColor: Colors.STRONG_CYAN,
    borderRadius: rbr(10),
    borderBottomLeftRadius: rbr(0),
    maxWidth: '80%',
    padding: 12,
    paddingRight: rw(18),
  },
  text: {
    fontSize: rh(14),
    color: Colors.WHITE,
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
  profile: {
    width: rw(30),
    height: rh(30),
    borderRadius: rbr(30 / 2),
    marginRight: rw(12),
  },
});
