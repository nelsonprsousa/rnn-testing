import {
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
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

Navigation.setDefaultOptions({
  window: {
    backgroundColor: 'white',
  },
  layout: {
    componentBackgroundColor: 'white',
    orientation: ['portrait'],
  },
  topBar: {
    visible: false,
  },
  bottomTabs: {
    titleDisplayMode: 'alwaysShow',
  },
  statusBar: {
    style: 'dark',
    backgroundColor: 'white',
  },
  modalPresentationStyle: OptionsModalPresentationStyle.fullScreen,
});

Navigation.registerComponent('Details', () => Details);
