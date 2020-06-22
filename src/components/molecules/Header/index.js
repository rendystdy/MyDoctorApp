// @flow

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
import DarkProfile from './DarkProfile';

type Props = {
  title: string,
  onPress: Function,
  type: string,
};

const Header = ({title, onPress, type}: Props) => {
  if (type === 'dark-profile') {
    return <DarkProfile onPress={onPress} />;
  }

  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'arrow-back-light' : 'arrow-back-dark'}
        onPress={onPress}
      />
      <Text style={styles.title(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create(
  ({
    container: (type) => ({
      backgroundColor: type === 'dark' ? Colors.VERY_DARK_BLUE : 'transparent',
      flexDirection: 'row',
      paddingHorizontal: rw(16),
      paddingVertical: rh(30),
      alignItems: 'center',
      borderBottomLeftRadius: type === 'dark' ? 20 : 0,
      borderBottomRightRadius: type === 'dark' ? 20 : 0,
    }),
    title: (type) => ({
      textAlign: 'center',
      fontFamily: FontsType.semiBold,
      fontSize: rf(20),
      color: type === 'dark' ? Colors.WHITE : Colors.VERY_DARK_BLUE,
      flex: 1,
    }),
  }: Object),
);
