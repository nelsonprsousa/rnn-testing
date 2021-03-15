/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{backgroundColor: 'white'}}>
          <View>
            <Button
              title="Navigate to new root"
              backgroundColor="black"
              color="red"
              onPress={() => {
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
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

App.options = {
  bottomTab: {
    text: 'App',
  },
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  footer: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    height: 1500,
  },
});

export default App;
