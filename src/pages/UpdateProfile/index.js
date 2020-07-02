// @flow

import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import {useDispatch} from 'react-redux';

import {Header, Profile, Input, Button, Gap} from '../../components';
import {DummyUser, ICRemovePhoto, ILUserPhotoNull} from '../../assets';
import {
  responsiveWidth as rw,
  responsiveHeight as rh
} from '../../utils/Responsive';
import {Colors} from '../../utils/Colors';
import {ROUTE_NAME} from '../../router';
import {getData, storeData} from '../../utils/localStorage';
import {Firebase} from '../../config';
import {showError} from '../../utils/showMessage';

type Props = {
  navigation: NavigationProp
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

const UpdateProfile = ({navigation}: Props) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
    userId: '',
    photo: ''
  });

  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const [photo, setPhoto] = useState(ILUserPhotoNull);
  const [photoForDb, setPhotoForDb] = useState('');

  useEffect(() => {
    getData('user').then((res) => {
      const {photo} = res;
      
      setPhoto({uri: photo});
      setProfile(res);
    });
  }, []);

  const handleChangeText = (type, value) => {
    setProfile({
      ...profile,
      [type]: value
    });
  };

  const handleUpdateProfile = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showError('Oppsss, password kurang dari 6 karakter');
      } else {
        firebaseUpdatePassword();
        firebaseUpdateProfile();
        setTimeout(() => {
          navigation.replace(ROUTE_NAME.MAIN_APP);
        }, 3000);
      }
    } else {
      // update profile
      firebaseUpdateProfile();
      setTimeout(() => {
        navigation.replace(ROUTE_NAME.MAIN_APP);
      }, 3000);
    }
  };

  const firebaseUpdatePassword = () => {
    dispatch({type: 'SET_LOADING', value: true});
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user
          .updatePassword(password)
          .then((res) => {
            dispatch({type: 'SET_LOADING', value: false});
          })
          .catch((error) => {
            dispatch({type: 'SET_LOADING', value: false});
            showError(error.message);
          });
      }
    });
  };

  const firebaseUpdateProfile = () => {
    if (photoForDb.length === 0) {
      dispatch({type: 'SET_LOADING', value: true});
      return Firebase.database()
        .ref(`users/${profile.userId}/`)
        .update(profile)
        .then((res) => {
          storeData('user', profile);
          dispatch({type: 'SET_LOADING', value: false});
        })
        .catch((error) => {
          dispatch({type: 'SET_LOADING', value: false});
          showError(error.message);
        });
    } else {
      const data = profile;
      data.photo = photoForDb;
      dispatch({type: 'SET_LOADING', value: true});
      return Firebase.database()
        .ref(`users/${profile.userId}/`)
        .update(data)
        .then((res) => {
          storeData('user', data);
          dispatch({type: 'SET_LOADING', value: false});
        })
        .catch((error) => {
          dispatch({type: 'SET_LOADING', value: false});
          showError(error.message);
        });
    }
  };

  const handleGetImage = () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        showError('Opps, sepertinya anda tidak memilih fotonya ?');
      } else if (response.error) {
        showError('Sepertinya terjadi kesalahan, silahkan coba lagi');
      } else {
        const {type, data, uri} = response;
        const source = {uri: uri};

        setPhotoForDb(`data:${type};base64, ${data}`);
        setPhoto(source);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Edit  Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile profile={photo} icon="remove" onPress={handleGetImage} />
          <Gap height={26} />
          <Input
            label="Full Name"
            value={profile.fullName}
            onChange={(value) => handleChangeText('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={profile.profession}
            onChange={(value) => handleChangeText('profession', value)}
          />
          <Gap height={24} />
          <Input label="Email Address" value={profile.email} disabled={true} />
          <Gap height={24} />
          <Input
            label="Password"
            value={password}
            onChange={(value) => setPassword(value)}
            secureTextEntry
          />
          <Gap height={40} />
          <Button title="Save Profile" onPress={handleUpdateProfile} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  content: {
    paddingHorizontal: rw(40),
    flex: 1,
    paddingBottom: rh(48)
  }
});
