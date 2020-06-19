// @flow

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {Header, Profile, ListItems, Gap} from '../../components';
import {Colors} from '../../utils/Colors';

type Props = {
  navigation: NavigationProp,
};

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile />
      <Gap height={14} />
      <ListItems
        type="next"
        name="Edit Profile"
        desc="Last updated yesterday"
        icon="edit-profile"
      />
      <ListItems
        type="next"
        name="Language"
        desc="Available 12 languages"
        icon="language"
      />
      <ListItems
        type="next"
        name="Give us Rate"
        desc="On Google Play Store"
        icon="rated"
      />
      <ListItems
        type="next"
        name="Help Center"
        desc="Read our guidelines"
        icon="help"
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
  },
});
