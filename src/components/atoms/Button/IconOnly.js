// @flow

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ICArrowBack, ICArrowBackLight} from '../../../assets';

type Props = {
  onPress: Function,
  icon?: string,
};

const IconOnly = ({onPress, icon}: Props) => {
  const Icon = () => {
    const listIcon = {
      ICArrowBackDark: 'arrow-back-dark',
      ICArrowBackLight: 'arrow-back-light',
    };

    switch (icon) {
      case listIcon.ICArrowBackDark:
        return <ICArrowBack />;
      case listIcon.ICArrowBackLight:
        return <ICArrowBackLight />;
      default:
        return <ICArrowBack />;
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({});
