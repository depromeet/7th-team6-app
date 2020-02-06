/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar, StyleSheet, View, SafeAreaView} from 'react-native';
import {observer} from 'mobx-react';
import {useStores} from 'stores';
import Navigator from 'navigation';
import {GRAY1, WHITE} from 'assets/colors';

const App = () => {
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
    backgroundColor: GRAY1,
    flex: 1,
    height: '100%',
    flexDirection: 'column',
  },
  Wrapper: {
    flex: 1,
  },
  SafeAreaTop: {
    width: '100%',
    backgroundColor: GRAY1,
  },
});
