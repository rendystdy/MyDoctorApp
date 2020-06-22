// @flow

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {Header, Profile, ProfileItems, Button, Gap} from '../../components';
import {DummyDokter5} from '../../assets';
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
} from '../../utils/Responsive';
import {Colors} from '../../utils/Colors';
import {ROUTE_NAME} from '../../router';

type Props = {
  navigation: NavigationProp,
};

const DoctorProfile = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Profile
        name="Nairobi Putri Hayza"
        job="Dokter Anak"
        profile={DummyDokter5}
        icon="female"
      />
      <Gap height={10} />
      <ProfileItems title="Alumnus" desc="Universitas Indonesia, 2020" />
      <ProfileItems title="Tempat Praktik" desc="Universitas Indonesia, 2020" />
      <ProfileItems title="No. STR" desc="0000116622081996" />
      <View style={styles.wrapper}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate(ROUTE_NAME.CHAT)}
        />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  wrapper: {
    paddingHorizontal: rw(40),
    paddingTop: rh(23),
  },
});
