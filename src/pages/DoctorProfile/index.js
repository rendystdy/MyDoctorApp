// @flow

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';

import {Header, Profile, ProfileItems, Button, Gap} from '../../components';
import {DummyDokter5} from '../../assets';
import {
  responsiveWidth as rw,
  responsiveHeight as rh
} from '../../utils/Responsive';
import {Colors} from '../../utils/Colors';
import {ROUTE_NAME} from '../../router';

type Props = {
  navigation: NavigationProp,
  route: RouteProp
};

const DoctorProfile = ({navigation, route}: Props) => {
  const {
    params: {
      data: {
        fullName,
        category,
        university,
        str_number,
        hospital_address,
        photo
      },
      data
    }
  } = route;

  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Profile
        name={fullName}
        job={category}
        profile={{uri: photo}}
        icon="female"
      />
      <Gap height={10} />
      <ProfileItems title="Alumnus" desc={university} />
      <ProfileItems title="Tempat Praktik" desc={hospital_address} />
      <ProfileItems title="No. STR" desc={str_number} />
      <View style={styles.wrapper}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate(ROUTE_NAME.CHAT, data)}
        />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  wrapper: {
    paddingHorizontal: rw(40),
    paddingTop: rh(23)
  }
});
