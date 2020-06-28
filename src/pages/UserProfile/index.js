// @flow

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {Header, Profile, ListItems, Gap} from '../../components';
import {Colors} from '../../utils/Colors';
import {ROUTE_NAME} from '../../router';
import {ILUserPhotoNull} from '../../assets';
import {getData} from '../../utils/localStorage';
import {Firebase} from '../../config';
import {showMessage} from 'react-native-flash-message';

type Props = {
  navigation: NavigationProp
};

const UserProfile = ({navigation}: Props) => {
  const [profile, setProfile] = useState({
    photo: ILUserPhotoNull,
    fullName: '',
    profession: ''
  });

  useEffect(() => {
    getData('user').then((res) => {
      const {fullName, profession, photo} = res;
      setProfile({
        fullName: fullName,
        profession: profession,
        photo: {uri: photo}
      });
    });
  }, []);

  const handleSignOut = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        console.log('success sign out');
        navigation.replace(ROUTE_NAME.GET_STARTED);
      })
      .catch((error) => {
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: Colors.SOFT_RED,
          color: Colors.WHITE
        });
      });
  };

  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      {profile.fullName.length > 0 && (
        <Profile
          profile={profile.photo}
          name={profile.fullName}
          job={profile.profession}
        />
      )}
      <Gap height={14} />
      <ListItems
        type="next"
        name="Edit Profile"
        desc="Last updated yesterday"
        icon="edit-profile"
        onPress={() => navigation.navigate(ROUTE_NAME.UPDATE_PROFILE)}
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
        onPress={handleSignOut}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1
  }
});
