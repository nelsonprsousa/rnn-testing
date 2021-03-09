/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './App';
import Details from './src/Details';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.WelcomeScreen',
              id: 'myComponentId',
            },
          },
        ],
      },
    },
  });
});

Navigation.registerComponent('Details', () => Details);
