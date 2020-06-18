// @flow

import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ListDoctorItem} from '../../components/molecules';
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontValue as rf,
} from '../../utils/Responsive';
import {Colors} from '../../utils/Colors';
import {FontsType} from '../../utils/Fonts';

type Props = {};

const Messages = ({}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.secondaryContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Messages</Text>
          <ListDoctorItem />
          <ListDoctorItem />
          <ListDoctorItem />
        </ScrollView>
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.VERY_DARK_BLUE,
  },
  secondaryContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  // wrapperSection: {
  //   marginHorizontal: rw(16),
  //   marginVertical: rh(30),
  // },
  title: {
    fontSize: rf(20),
    lineHeight: 24,
    color: Colors.VERY_DARK_BLUE,
    fontFamily: FontsType.semiBold,
    marginLeft: rw(16),
    marginTop: rh(30),
  },
});
