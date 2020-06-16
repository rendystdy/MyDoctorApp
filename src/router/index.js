import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {GetStarted, Splash, Register, Login} from '../pages';

const Stack = createStackNavigator();

export const ROUTE_NAME = {
  SPLASH: 'Splash',
  GET_STARTED: 'Get Started',
  REGISTER: 'Register',
  LOGIN: 'Login',
};

const options = (routeName, show) => {
  return {
    headerShown: show,
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
        options={options(ROUTE_NAME.REGISTER, true)}
      />
      <Stack.Screen
        name={ROUTE_NAME.LOGIN}
        component={Login}
        options={options(ROUTE_NAME.LOGIN, true)}
      />
    </Stack.Navigator>
  );
};

export default Router;
