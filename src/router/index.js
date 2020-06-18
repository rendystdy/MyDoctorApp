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
};

// export const MyHeader = ({scene, previous, navigation}) => {
//   const {options} = scene.descriptor;
//   const title =
//     options.headerTitle !== undefined
//       ? options.headerTitle
//       : options.title !== undefined
//       ? options.title
//       : scene.route.name;
//   console.log({scene, previous, navigation});

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
    <Stack.Navigator initialRouteName={ROUTE_NAME.MAIN_APP}>
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
    </Stack.Navigator>
  );
};

export default Router;
