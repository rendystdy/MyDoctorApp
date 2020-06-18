// @flow

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {Header, Input, Button, Gap} from '../../components';
import {Colors} from '../../utils/Colors';
import {ROUTE_NAME} from '../../router';

type Props = {
  navigation: NavigationProp,
};

const Register = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Header
        title="Daftar Akun"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button
          title="Continue"
          type="primary"
          onPress={() => navigation.navigate(ROUTE_NAME.UPLOAD_PHOTO)}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
