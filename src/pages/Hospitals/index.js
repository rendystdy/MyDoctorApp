// @flow

import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

import {
  ILBGHospitals,
  DummyThumbnail1,
  DummyThumbnail2,
  DummyThumbnail3,
} from '../../assets';
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontValue as rf,
  responsiveBorderRadius as rbr,
} from '../../utils/Responsive';
import {FontsType} from '../../utils/Fonts';
import {Colors} from '../../utils/Colors';
import {ListHospitals} from '../../components';

const Hospitals = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ILBGHospitals} style={styles.imgBackground}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospitals
          title="Rumah Sakit"
          name="Citra Bunga Merdeka"
          address="Jln. Surya Sejahtera 20"
          images={DummyThumbnail1}
        />
        <ListHospitals
          title="Rumah Sakit"
          name="Happy Family & Kids"
          address="Jln. Surya Sejahtera 20"
          images={DummyThumbnail2}
        />
        <ListHospitals
          title="Rumah Sakit"
          name="Tingkatan Paling Atas"
          address="Jln. Surya Sejahtera 20"
          images={DummyThumbnail3}
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.VERY_DARK_BLUE,
  },
  imgBackground: {
    height: rh(240),
    paddingTop: rh(13),
  },
  content: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderRadius: rbr(20),
    marginTop: -30,
    paddingTop: rh(14),
  },
  title: {
    fontSize: rf(20),
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: FontsType.semiBold,
    color: Colors.WHITE,
  },
  desc: {
    fontSize: rf(14),
    lineHeight: 17,
    textAlign: 'center',
    fontFamily: FontsType.light,
    color: Colors.WHITE,
    marginTop: rh(6),
  },
});
