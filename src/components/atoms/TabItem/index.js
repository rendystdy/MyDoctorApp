// @flow

import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  ICDoctorInactive,
  ICHospitalsInactive,
  ICMessagesInactive,
  ICDoctorActive,
  ICHospitalsActive,
  ICMessagesActive,
} from '../../../assets';
import {
  responsiveFontValue as rf,
  responsiveHeight as rh,
  responsiveWidth as rw,
} from '../../../utils/Responsive';
import {FontsType} from '../../../utils/Fonts';
import {Colors} from '../../../utils/Colors';

type Props = {
  title: String,
  isFocused: String,
  onPress: Function,
  onLongPress: Function,
};

const Title = {
  DOCTOR: 'Doctor',
  MESSAGES: 'Messages',
  HOSPITALS: 'Hospitals',
};

const TabItem = ({title, isFocused, onPress, onLongPress}: Props) => {
  const Icon = () => {
    switch (title) {
      case Title.DOCTOR:
        return isFocused ? <ICDoctorActive /> : <ICDoctorInactive />;
      case Title.HOSPITALS:
        return isFocused ? <ICHospitalsActive /> : <ICHospitalsInactive />;
      case Title.MESSAGES:
        return isFocused ? <ICMessagesActive /> : <ICMessagesInactive />;
      default:
        return isFocused ? <ICDoctorActive /> : <ICDoctorInactive />;
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.title(isFocused)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create(
  ({
    container: {
      alignItems: 'center',
    },
    title: (isFocused) => ({
      fontSize: rf(10),
      textAlign: 'center',
      fontFamily: FontsType.semiBold,
      color: isFocused
        ? Colors.STRONG_CYAN
        : Colors.MOSTLY_DESATURATED_DARK_BLUE,
      lineHeight: 14,
      marginTop: rh(4),
    }),
  }: Object),
);
