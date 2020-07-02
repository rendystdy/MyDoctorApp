// @flow
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import {useSelector, Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {YellowBox} from 'react-native';

import Router from './router';
import {Loading} from './components';
import store from './redux/store';

const MainNavigator = () => {
  const loading = useSelector((state) => state.loading);
  YellowBox.ignoreWarnings(['Setting a timer', 'Require cycle:'])
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
      {loading && <Loading />}
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
