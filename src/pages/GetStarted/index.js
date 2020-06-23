// @flow

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {ILLogo, ILGetStarted} from '../../assets';
import {Button, Gap} from '../../components/atoms';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import {FontsType} from '../../utils/Fonts';
import {ROUTE_NAME} from '../../router';
import {Colors} from '../../utils/Colors';

type Props = {
  navigation: NavigationProp,
};

const GetStarted = ({navigation}: Props) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.pages}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => {
            navigation.navigate(ROUTE_NAME.REGISTER);
          }}
        />
        <Gap height={16} />
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => {
            navigation.navigate(ROUTE_NAME.LOGIN);
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create(
  ({
    pages: {
      padding: 40,
      justifyContent: 'space-between',
      flex: 1,
    },
    title: {
      fontSize: 28,
      color: Colors.WHITE,
      fontWeight: '600',
      marginTop: 91,
      fontFamily: FontsType.semiBold,
    },
    customHeights: (value) => ({
      height: value,
    }),
  }: Object),
);
