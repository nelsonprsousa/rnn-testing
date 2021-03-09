/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Card from './src/Card';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView style={{backgroundColor: 'white', margin: 20}}>
          <View style={{height: 250}} />
          <Card />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

App.options = {
  topBar: {
    options: {
      visible: false,
    },
    visible: false,
  },
};

export default App;
