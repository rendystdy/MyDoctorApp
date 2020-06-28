// @flow

import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {ILLogo} from '../../assets/illustration';
import {Input, Link, Button, Gap} from '../../components';
import {FontsType} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';
import {
  responsiveFontValue as rf,
  responsiveWidth as rw,
  responsiveHeight as rh
} from '../../utils/Responsive';
import {ROUTE_NAME} from '../../router';
import {useForm} from '../../utils/useForm';
import {Firebase} from '../../config';
import {storeData} from '../../utils/localStorage';
import {showError} from '../../utils/showMessage';

type Props = {
  navigation: NavigationProp
};

const Login = ({navigation}: Props) => {
  const [form, setForm] = useForm({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({type: 'SET_LOADING', value: true});
    Firebase.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        const {
          user: {uid}
        } = res;
        Firebase.database()
          .ref(`users/${uid}/`)
          .once('value')
          .then((res) => {
            setForm('reset');
            dispatch({type: 'SET_LOADING', value: false});
            if (res.val()) {
              storeData('user', res.val());
              navigation.replace(ROUTE_NAME.MAIN_APP);
            }
          })
          .catch((err) => {
            // Handle Errors here.
            var errorCode = err.code;
            var errorMessage = err.message;
            dispatch({type: 'SET_LOADING', value: false});
            showError(errorMessage);
          });
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        dispatch({type: 'SET_LOADING', value: false});
        showError(errorMessage);
      });

    // navigation.replace(ROUTE_NAME.MAIN_APP);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Gap height={40} />
        <ILLogo />
        <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
        <Input
          label="Email Address"
          value={form.email}
          onChange={(value) => setForm('email', value)}
        />
        <Gap height={24} />
        <Input
          label="Password"
          value={form.password}
          onChange={(value) => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={10} />
        <Link label="Forgot My Password" fontSize={12} />
        <Gap height={40} />
        <Button title="Sign In" onPress={handleLogin} />
        <Gap height={30} />
        <Link
          label="Create New Account"
          fontSize={16}
          textAlign="center"
          onPress={() => navigation.navigate(ROUTE_NAME.REGISTER)}
        />
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rw(40),
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  title: {
    color: Colors.VERY_DARK_BLUE,
    fontSize: rf(20),
    fontFamily: FontsType.semiBold,
    marginVertical: rh(40),
    textAlign: 'left',
    lineHeight: rh(24),
    maxWidth: rw(153)
  }
});
