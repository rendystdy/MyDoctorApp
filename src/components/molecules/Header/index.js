// @flow

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {Colors} from '../../../utils/Colors';
import {FontsType} from '../../../utils/Fonts';
import {
  responsiveFontValue as rf,
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveBorderRadius as rbr,
} from '../../../utils/Responsive';
import {ICArrowBack} from '../../../assets';
import {Gap, Button} from '../../atoms';

type Props = {
  title: String,
  onPress: Function
};

const Header = ({title, onPress}: Props) => {
  return (
    <View style={styles.container}>
      <Button
        type="icon-only"
        icon="arrow-back"
        onPress={onPress}
      />
      <Text style={styles.title}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    paddingHorizontal: rw(16),
    paddingVertical: rh(30),
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: FontsType.semiBold,
    fontSize: rf(20),
    color: Colors.VERY_DARK_BLUE,
    flex: 1,
  },
});
