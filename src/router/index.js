import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {GetStarted, Splash, Register, Login, UploadPhoto} from '../pages';
import {FontsType} from '../utils/Fonts';
import {responsiveFontValue as rf} from '../utils/Responsive';
import {Colors} from '../utils/Colors';

const Stack = createStackNavigator();

export const ROUTE_NAME = { 
  SPLASH: 'Splash',
  GET_STARTED: 'Get Started',
  REGISTER: 'Register',
  LOGIN: 'Login',
  DAFTAR_AKUN: 'Daftar Akun',
  UPLOAD_PHOTO: 'Upload Photo'
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
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};

export default Router;
