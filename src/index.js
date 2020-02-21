/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {observer} from 'mobx-react';
import {useStores} from 'stores';
import Navigator from 'navigation';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <View style={style.Root}>
      <StatusBar barStyle="dark-content" />
      <View style={style.Wrapper}>
        <Navigator onNavigationStateChange={() => {}} uriPrefix="/unibat" />
      </View>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  Root: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
  },
  Wrapper: {
    flex: 1,
  },
});
