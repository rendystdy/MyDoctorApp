// @flow

/* eslint-disable no-use-before-define */
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {ILLogo} from '../../assets';
import {FontsType} from '../../utils/Fonts';
import {ROUTE_NAME} from '../../router';
import {Colors} from '../../utils/Colors';

type Props = {
  navigation: NavigationProp,
};

const Splash = ({navigation}: Props) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(ROUTE_NAME.GET_STARTED);
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  title: {
    fontSize: 20,
    fontFamily: FontsType.semiBold,
    color: Colors.VERY_DARK_BLUE,
    marginTop: 20,
  },
});

export default Splash;
