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
import {GRAY1} from 'assets/colors';

const App = () => {
  return (
    <View style={style.Root}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={style.SafeArea} />
      <View style={style.Wrapper}>
        <Navigator onNavigationStateChange={() => {}} uriPrefix="/app" />
      </View>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  Root: {
    backgroundColor: GRAY1,
    flex: 1,
  },
  Wrapper: {
    flex: 1,
  },
});
