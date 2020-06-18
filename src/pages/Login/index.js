import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ILLogo} from '../../assets/illustration';
import {Input, Link, Button, Gap} from '../../components';
import {FontsType} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';
import {
  responsiveFontValue as rf,
  responsiveWidth as rw,
  responsiveHeight as rh,
} from '../../utils/Responsive';

const Login = () => {
  return (
    <View style={styles.container}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link label="Forgot My Password" fontSize={12} />
      <Gap height={40} />
      <Button title="Sign In" />
      <Gap height={30} />
      <Link label="Create New Account" fontSize={16} textAlign="center" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingVertical: rh(40),
    paddingHorizontal: rw(40),
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  title: {
    color: Colors.VERY_DARK_BLUE,
    fontSize: rf(20),
    fontFamily: FontsType.semiBold,
    marginVertical: rh(40),
    textAlign: 'left',
    lineHeight: rh(24),
    maxWidth: rw(153),
  },
});
