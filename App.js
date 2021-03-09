/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

const App: () => React$Node = () => {
  const animated = useAnimatedStyle(() => {
    return {
      transform: [{scale: 1}],
    };
  });

  return (
    <SafeAreaView>
      <Animated.ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{backgroundColor: 'gray'}}>
        <View>
          <Text style={styles.footer}>Hello Wix!</Text>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
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
