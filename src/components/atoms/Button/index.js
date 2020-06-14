// @flow

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { FontsType } from '../../../utils/Fonts';

type Props = {
  title: String,
  type: String,
};

const Button = ({type, title}: Props) => {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.title(type)}>{title}</Text>
    </View>
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
