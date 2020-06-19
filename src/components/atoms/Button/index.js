// @flow

import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {FontsType} from '../../../utils/Fonts';
import {ICArrowBack} from '../../../assets';
import IconOnly from './IconOnly';
import {Colors} from '../../../utils/Colors';
import BtnIconSend from './BtnIconSend';

type Props = {
  title: String,
  type: String,
  onPress: Function,
  icon: String,
  disabled: Boolean,
};

const Button = ({type, title, onPress, icon, disabled}: Props) => {
  if (type === 'btn-icon-send') {
    return <BtnIconSend disabled={disabled} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  return (
    <TouchableOpacity
      style={styles.container(type, disabled)}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.title(type, disabled)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type, disabled) => ({
    backgroundColor:
      type === 'secondary'
        ? Colors.WHITE
        : disabled
        ? Colors.LIGHT_GRAYISH_BLUE
        : Colors.STRONG_CYAN,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  }),
  title: (type, disabled) => ({
    color:
      type === 'secondary'
        ? Colors.VERY_DARK_BLUE
        : disabled
        ? Colors.GRAYISH_BLUE
        : Colors.WHITE,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: FontsType.semiBold,
  }),
});
