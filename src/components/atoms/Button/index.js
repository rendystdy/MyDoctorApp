// @flow

import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { FontsType } from '../../../utils/Fonts';

type Props = {
  title: String,
  type: String,
  onPress: Function
};

const Button = ({type, title, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.title(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'secondary' ? '#fff' : '#0BCAD4',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  }),
  title: (type) => ({
    color: type === 'secondary' ? '#112340' : '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: FontsType.semiBold
  }),
});
