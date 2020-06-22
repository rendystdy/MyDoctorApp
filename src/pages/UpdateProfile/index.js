// @flow

import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {Header, Profile, Input, Button, Gap} from '../../components';
import {DummyUser, ICRemovePhoto} from '../../assets';
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
} from '../../utils/Responsive';
import {Colors} from '../../utils/Colors';
import {ROUTE_NAME} from '../../router';

type Props = {
  navigation: NavigationProp,
};

const UpdateProfile = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Header title="Edit  Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile profile={DummyUser} icon="remove" />
          <Gap height={26} />
          <Input label="Full Name" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email Address" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={40} />
          <Button
            title="Save Profile"
            onPress={() => navigation.goBack(ROUTE_NAME.USER_PROFILE)}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  content: {
    paddingHorizontal: rw(40),
    flex: 1,
    paddingBottom: rh(48),
  },
});
