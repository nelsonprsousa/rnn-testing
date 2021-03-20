import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const Details: () => React$Node = () => {
  const imagePath =
    'https://media-cdn.tripadvisor.com/media/photo-s/12/3f/e6/89/torre-de-belem.jpg';

  const source = {
    uri: imagePath,
    resizeMode: 'center',
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        style={styles.carouselImage}
        source={source}
        nativeID={'toIdImage'}
      />
    </View>
  );
};

Details.options = {
  statusBar: {
    visible: true,
    translucent: false,
    drawBehind: true,
    style: 'light',
    backgroundColor: 'transparent',
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
