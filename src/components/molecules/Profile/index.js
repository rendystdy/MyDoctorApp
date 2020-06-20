// @flow

import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {
  DummyThumbnail1,
  DummyUser,
  ICRemovePhoto,
  ICAddPhoto,
} from '../../../assets';
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveBorderRadius as rbr,
  responsiveFontValue as rf,
} from '../../../utils/Responsive';
import {Colors} from '../../../utils/Colors';
import {FontsType} from '../../../utils/Fonts';

type Props = {
  name: String,
  job: String,
  profile: String,
  icon: String,
};

const Profile = ({name, job, profile, icon}: Props) => {
  const Icon = () => {
    switch (icon) {
      case 'remove':
        return <ICRemovePhoto style={styles.icon} />;
      case 'add':
        return <ICAddPhoto style={styles.icon} />;
      default:
        return;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapperAvatar}>
        <Image source={profile} style={styles.profile} />
        {icon && <Icon />}
      </View>
      {name && <Text style={styles.name}>{name}</Text>}
      {job && <Text style={styles.job}>{job}</Text>}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    width: rw(110),
    height: rh(110),
    borderRadius: rbr(110 / 2),
  },
  name: {
    fontSize: rf(20),
    color: Colors.VERY_DARK_BLUE,
    lineHeight: 27,
    textAlign: 'center',
    fontFamily: FontsType.semiBold,
  },
  job: {
    fontSize: rf(16),
    color: Colors.DARK_GRAYISH_BLUE,
    lineHeight: 22,
    textAlign: 'center',
    fontFamily: FontsType.regular,
    marginTop: rh(2),
  },
  wrapperAvatar: {
    width: rw(130),
    height: rh(130),
    borderRadius: rbr(130 / 2),
    borderWidth: 1,
    borderColor: Colors.VERY_LIGHT_GRAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
});
