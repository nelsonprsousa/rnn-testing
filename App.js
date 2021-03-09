/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Button
        title="Press me"
        onPress={() => {
          Navigation.push('myDummyId', {
            component: {
              name: 'FocusKeyboard',
            },
          });
        }}
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
});

App.options = {
  bottomTab: {
    text: 'App',
  },
};

export default App;
