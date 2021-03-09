/**
 * @format
 */
import React from 'react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';
import App from './App';

registerComponent('com.myApp.WelcomeScreen', App);

function registerComponent(key, ScreenComponent) {
  Navigation.registerComponent(
    key,
    () => gestureHandlerRootHOC((props) => <ScreenComponent {...props} />),
    () => ScreenComponent,
  );
}

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.WelcomeScreen',
            },
          },
        ],
      },
    },
  });
});
