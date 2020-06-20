// @flow

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Header, Button, Gap, Profile} from '../../components';
import {Colors} from '../../utils/Colors';
import {ILUserPhotoNull, ICRemovePhoto, DummyUser} from '../../assets';
import {Link} from '../../components';
import {
  responsiveHeight as rw,
  responsiveHeight as rh,
  responsiveBorderRadius as rbr,
  responsiveFontValue as rf,
} from '../../utils/Responsive';
import {FontsType} from '../../utils/Fonts';

type Props = {};

const UploadPhoto = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.sectionOne}>
          <Profile icon="add" profile={DummyUser} />
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.job}>Product Designer</Text>
        </View>
        <View>
          <Button title="Upload and Continue" type="primary" disabled={true} />
          <Gap height={30} />
          <Link label="Skip for this" textAlign="center" fontSize={16} />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  content: {
    paddingHorizontal: rw(40),
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: rh(64),
  },
  name: {
    marginTop: rh(26),
    fontSize: rf(24),
    fontFamily: FontsType.semiBold,
    color: Colors.VERY_DARK_BLUE,
    textAlign: 'center',
    lineHeight: 33,
  },
  job: {
    fontSize: rf(18),
    fontFamily: FontsType.regular,
    color: Colors.DARK_GRAYISH_BLUE,
    textAlign: 'center',
    lineHeight: 25,
  },
  sectionOne: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
