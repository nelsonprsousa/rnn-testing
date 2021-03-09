/**
 * @format
 */
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import App from './App';
Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'com.myApp.WelcomeScreen',
                    id: 'myDummyId',
                  },
                },
              ],
            },
          },
        ],
        options: {
          bottomTabs: {
            backgroundColor: 'white',
            shadow: {
              color: 'red',
            },
            hideShadow: false,
          },
        },
      },
    },
  });
});

const FocusKeyboard = (props) => {
  return (
    <View style={styles.root}>
      <TextInput autoFocus placeholder={'Placeholder'} />
    </View>
  );
};
Navigation.registerComponent('FocusKeyboard', () => FocusKeyboard);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
