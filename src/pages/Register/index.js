// @flow

import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {Header, Input, Button, Gap, Loading} from '../../components';
import {Colors} from '../../utils/Colors';
import {ROUTE_NAME} from '../../router';
import {useForm} from '../../utils/useForm';
// import {Firebase} from '../../config';

type Props = {
  navigation: NavigationProp
};

const Register = ({navigation}: Props) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: ''
  });

  const handleContinue = () => {
    console.log('FORM', {form});
    setLoading(true);
    // Firebase.auth()
    //   .createUserWithEmailAndPassword(form.email, form.password)
    //   .then((data) => {
    //     console.log('SUCCESS', data);
    //     setForm('reset');
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     // Handle Errors here.
    //     let errorCode = error.code;
    //     let errorMessage = error.message;
    //     setLoading(false);
    //     // ...
    //     console.log({errorCode, errorMessage});
    //   });
  };

  return (
    <>
      <View style={styles.container}>
        <Header
          title="Daftar Akun"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChange={(value) => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.profession}
              onChange={(value) => setForm('profession', value)}
            />
            <Gap height={24} />
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
            <Gap height={40} />
            <Button title="Continue" type="primary" onPress={handleContinue} />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  content: {
    padding: 40,
    paddingTop: 0
  }
});
