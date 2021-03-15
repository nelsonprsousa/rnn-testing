/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import App from './App';
Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'com.myApp.WelcomeScreen',
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

// Navigation.events().registerAppLaunchedListener(async () => {
//   Navigation.setRoot({
//     root: {
//       bottomTabs: {
//         children: [
//           {
//             stack: {
//               children: [
//                 {
//                   component: {
//                     name: 'com.myApp.WelcomeScreen',
//                   },
//                 },
//               ],
//             },
//           },
//         ],
//         options: {
//           bottomTabs: {
//             backgroundColor: 'white',
//             shadow: {
//               color: 'red',
//             },
//             hideShadow: false,
//           },
//         },
//       },
//     },
//   });
// });
