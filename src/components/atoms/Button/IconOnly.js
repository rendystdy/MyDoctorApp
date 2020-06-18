// @flow

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ICArrowBack} from '../../../assets';

type Props = {
  onPress: Function,
  icon: String,
};

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    const listIcon = {
      ICArrowBack: 'arrow-back',
    };
    if (icon === listIcon.ICArrowBack) {
      return <ICArrowBack />;
    }

    return <ICArrowBack />
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({});
