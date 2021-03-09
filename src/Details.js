/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Image, Text} from 'react-native';

const Details: () => React$Node = () => {
  const title = 'Title';
  const imagePath =
    'https://media-cdn.tripadvisor.com/media/photo-s/12/3f/e6/89/torre-de-belem.jpg';

  const source = {
    uri: imagePath,
  };
  return (
    <>
      <SafeAreaView>
        <Image style={styles.carouselImage} source={source} nativeID={title} />
        <Text style={styles.carouselTitle} nativeID={`destinationId-${title}`}>
          Title
        </Text>
      </SafeAreaView>
    </>
  );
};

Details.options = {
  topBar: {
    options: {
      visible: false,
    },
    visible: false,
  },
};

const styles = StyleSheet.create({
  carouselImage: {
    resizeMode: 'cover',
    width: '100%',
    height: 400,
  },
  carouselTitle: {
    color: 'black',
    fontSize: 14,
    paddingBottom: 6,
    textTransform: 'uppercase',
  },
});

export default Details;
