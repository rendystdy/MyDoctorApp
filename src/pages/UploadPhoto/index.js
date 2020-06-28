// @flow

import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

import {Header, Button, Gap, Profile} from '../../components';
import {Colors} from '../../utils/Colors';
import {ILUserPhotoNull, ICRemovePhoto, DummyUser} from '../../assets';
import {Link} from '../../components';
import {
  responsiveHeight as rw,
  responsiveHeight as rh,
  responsiveBorderRadius as rbr,
  responsiveFontValue as rf
} from '../../utils/Responsive';
import {FontsType} from '../../utils/Fonts';
import {ROUTE_NAME} from '../../router';
import {Firebase} from '../../config';
import {storeData} from '../../utils/localStorage';

type Props = {
  navigation: NavigationProp,
  route: Object
};

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  },
  quality: 0.5,
  maxWidth: 200,
  maxHeight: 200
};

const UploadPhoto = ({route, navigation}: Props) => {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [avatarSource, setAvatarSource] = useState(ILUserPhotoNull);
  const [imageForDb, setImageForDb] = useState('');
  const {fullName, profession, userId} = route?.params;

  const handleGetImage = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        showMessage({
          message: 'Opps, sepertinya anda tidak memilih fotonya ?',
          type: 'default',
          backgroundColor: Colors.SOFT_RED,
          color: Colors.WHITE
        });
      } else if (response.error) {
        showMessage({
          message: 'Sepertinya terjadi kesalahan, silahkan coba lagi',
          type: 'default',
          backgroundColor: Colors.SOFT_RED,
          color: Colors.WHITE
        });
      } else {
        const source = {uri: response.uri};
        const {type, data} = response;
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        setImageForDb(`data:${type};base64, ${data}`);
        setAvatarSource(source);
        setHasPhoto(true);
      }
    });
  };

  const handleUploadAndContinue = () => {
    Firebase.database().ref(`users/${userId}/`).update({photo: imageForDb});
    const data = route?.params;
    data.photo = imageForDb;
    storeData('user', data);
    navigation.replace(ROUTE_NAME.MAIN_APP);
  };

  return (
    <View style={styles.container}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.sectionOne}>
          <Profile
            icon={hasPhoto ? 'remove' : 'add'}
            profile={avatarSource}
            onPress={handleGetImage}
          />
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.job}>{profession}</Text>
        </View>
        <View>
          <Button
            title="Upload and Continue"
            type="primary"
            onPress={handleUploadAndContinue}
            disabled={!hasPhoto}
          />
          <Gap height={30} />
          <Link
            label="Skip for this"
            textAlign="center"
            fontSize={16}
            onPress={handleUploadAndContinue}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  content: {
    paddingHorizontal: rw(40),
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: rh(64)
  },
  name: {
    marginTop: rh(26),
    fontSize: rf(24),
    fontFamily: FontsType.semiBold,
    color: Colors.VERY_DARK_BLUE,
    textAlign: 'center',
    lineHeight: 33
  },
  job: {
    fontSize: rf(18),
    fontFamily: FontsType.regular,
    color: Colors.DARK_GRAYISH_BLUE,
    textAlign: 'center',
    lineHeight: 25
  },
  sectionOne: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});
