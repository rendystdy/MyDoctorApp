// @flow

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo, ILGetStarted} from '../../assets';
import {Button} from '../../components/atoms';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

const GetStarted = () => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.pages}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button title="Get Started" />
        <View style={styles.customHeights(16)} />
        <Button title="Sign In" type="secondary" />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  pages: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '600',
    marginTop: 91,
  },
  customHeights: (value) => ({
    height: value
  })
});
