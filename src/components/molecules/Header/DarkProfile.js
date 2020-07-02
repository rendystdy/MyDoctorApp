// @flow

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {Colors} from '../../../utils/Colors';
import {FontsType} from '../../../utils/Fonts';
import {
  responsiveFontValue as rf,
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveBorderRadius as rbr
} from '../../../utils/Responsive';
import {ICArrowBack, DummyDokter1} from '../../../assets';
import {Gap, Button} from '../../atoms';

type Props = {
  title?: String,
  name?: String,
  onPress: Function,
  profile: object
};

const DarkProfile = ({title, name, onPress, profile}: Props) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon={'arrow-back-light'} onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Image source={profile} style={styles.profile} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.VERY_DARK_BLUE,
    flexDirection: 'row',
    paddingLeft: rw(20),
    paddingRight: rw(16),
    paddingVertical: rh(30),
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  content: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    fontFamily: FontsType.regular,
    fontSize: rf(14),
    color: Colors.MOSTLY_DESATURATED_DARK_BLUE,
    flex: 1,
    lineHeight: 17
  },
  name: {
    textAlign: 'center',
    fontFamily: FontsType.semiBold,
    fontSize: rf(20),
    color: Colors.WHITE,
    lineHeight: 24,
    flex: 1
  },
  profile: {
    width: rw(46),
    height: rh(46),
    borderRadius: rbr(46 / 2)
  }
});
