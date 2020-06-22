// @flow

import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

import {Colors} from '../../../utils/Colors';
import {FontsType} from '../../../utils/Fonts';
import {
  responsiveFontValue as rf,
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveBorderRadius as rbr,
} from '../../../utils/Responsive';

type Props = {
  label: string,
  value: string,
  onChange: Function,
  secureTextEntry?: boolean,
};

const Input = ({label, value, onChange, secureTextEntry}: Props) => {
  const [border, setBorder] = useState(Colors.VERY_LIGHT_GRAY);
  const onFocusForm = () => {
    setBorder(Colors.STRONG_BLUE);
  };

  const onBlurForm = () => {
    setBorder(Colors.VERY_LIGHT_GRAY);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input(border)}
        onBlur={onBlurForm}
        onFocus={onFocusForm}
        value={value}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create(
  ({
    input: (value) => ({
      width: rw(280),
      height: rh(45),
      borderWidth: 1,
      borderColor: value,
      borderRadius: rbr(10),
      padding: 12,
    }),
    label: {
      fontSize: 16,
      fontFamily: FontsType.regular,
      color: Colors.DARK_GRAYISH_BLUE,
      lineHeight: 22,
      marginBottom: rh(6),
    },
  }: Object),
);
