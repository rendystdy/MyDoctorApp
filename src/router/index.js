import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  GetStarted,
  Splash,
  Register,
  Login,
  UploadPhoto,
  Doctor,
  Hospitals,
  Messages,
  ChooseDoctor,
  Chat,
  UserProfile,
  UpdateProfile,
  DoctorProfile,
} from '../pages';
import {FontsType} from '../utils/Fonts';
import {responsiveFontValue as rf} from '../utils/Responsive';
import {Colors} from '../utils/Colors';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const TabBottom = createBottomTabNavigator();

export const ROUTE_NAME = {
  SPLASH: 'Splash',
  GET_STARTED: 'Get Started',
  REGISTER: 'Register',
  LOGIN: 'Login',
  DAFTAR_AKUN: 'Daftar Akun',
  UPLOAD_PHOTO: 'Upload Photo',
  DOCTOR: 'Doctor',
  MESSAGES: 'Messages',
  HOSPITALS: 'Hospitals',
  MAIN_APP: 'Main App',
  CHOOSE_DOCTOR: 'Pilih Dokter',
  CHOOSE_DOCTOR: 'Pilih Dokter',
  CHAT: 'Chat',
  USER_PROFILE: 'User Profile',
  UPDATE_PROFILE: 'Update Profile',
  DOCTOR_PROFILE: 'Doctor Profile',
};

// export const MyHeader = ({scene, previous, navigation}) => {
//   const {options} = scene.descriptor;
//   const title =
//     options.headerTitle !== undefined
//       ? options.headerTitle
//       : options.title !== undefined
//       ? options.title
//       : scene.route.name;å

//   return (
//     <MyHeader
//       title={title}
//       leftButton={
//         previous ? <MyBackButton onPress={navigation.goBack} /> : undefined
//       }
//       style={options.headerStyle}
//     />
//   );
// };

const MainApp = () => {
  return (
    <TabBottom.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <TabBottom.Screen name={ROUTE_NAME.DOCTOR} component={Doctor} />
      <TabBottom.Screen name={ROUTE_NAME.MESSAGES} component={Messages} />
      <TabBottom.Screen name={ROUTE_NAME.HOSPITALS} component={Hospitals} />
    </TabBottom.Navigator>
  );
};

const options = (routeName, show) => {
  return {
    headerShown: show,
    headerTitle: routeName,
    headerTitleStyle: {
      fontFamily: FontsType.semiBold,
      fontSize: rf(20),
      color: Colors.VERY_DARK_BLUE,
    },
  };
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTE_NAME.SPLASH}>
      <Stack.Screen
        name={ROUTE_NAME.SPLASH}
        component={Splash}
        options={options(ROUTE_NAME.SPLASH, false)}
      />
      <Stack.Screen
        name={ROUTE_NAME.GET_STARTED}
        component={GetStarted}
        options={options(ROUTE_NAME.GET_STARTED, false)}
      />
      <Stack.Screen
        name={ROUTE_NAME.REGISTER}
        component={Register}
        options={options(ROUTE_NAME.DAFTAR_AKUN, false)}
      />
      <Stack.Screen
        name={ROUTE_NAME.LOGIN}
        component={Login}
        options={options(ROUTE_NAME.LOGIN, false)}
      />
      <Stack.Screen
        name={ROUTE_NAME.UPLOAD_PHOTO}
        component={UploadPhoto}
        options={options(ROUTE_NAME.UPLOAD_PHOTO, false)}
      />
      <Stack.Screen
        name={ROUTE_NAME.MAIN_APP}
        component={MainApp}
        options={options(ROUTE_NAME.MAIN_APP, false)}
      />
      <Stack.Screen
        name={ROUTE_NAME.CHOOSE_DOCTOR}
        component={ChooseDoctor}
        options={options(ROUTE_NAME.CHOOSE_DOCTOR, false)}
      />
      <Stack.Screen
        name={ROUTE_NAME.CHAT}
        component={Chat}
        options={options(ROUTE_NAME.CHAT, false)}
      />
      <Stack.Screen
        name={ROUTE_NAME.USER_PROFILE}
        component={UserProfile}
        options={options(ROUTE_NAME.USER_PROFILE, false)}
      />
      <Stack.Screen
        name={ROUTE_NAME.UPDATE_PROFILE}
        component={UpdateProfile}
        options={options(ROUTE_NAME.UPDATE_PROFILE, false)}
      />
      <Stack.Screen
        name={ROUTE_NAME.DOCTOR_PROFILE}
        component={DoctorProfile}
        options={options(ROUTE_NAME.DOCTOR_PROFILE, false)}
      />
    </Stack.Navigator>
  );
};

export default Router;
