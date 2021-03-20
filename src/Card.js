import React from 'react';
import {TouchableOpacity, StyleSheet, Image, View, Text} from 'react-native';

import {
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';

const Card: () => React$Node = () => {
  const title = 'Title';
  const subtitle = 'Subtitle';
  const imagePath =
    'https://media-cdn.tripadvisor.com/media/photo-s/12/3f/e6/89/torre-de-belem.jpg';

  const source = {
    uri: imagePath,
  };

  const SPRING_CONFIG = {
    mass: 3,
    damping: 100,
    stiffness: 200,
  };
  const SET_DURATION = 500;

  const showDetailsModal = () => {
    Navigation.showModal({
      component: {
        name: 'Details',
        options: {
          animations: {
            showModal: {
              sharedElementTransitions: [
                {
                  fromId: 'fromIdImage',
                  toId: 'toIdImage',
                  duration: SET_DURATION,
                  interpolation: {
                    type: 'spring',
                    ...SPRING_CONFIG,
                  },
                },
              ],
            },
          },
        },
      },
    });
  };

  return (
    <TouchableOpacity
      style={styles.carouselTouchableOpacity}
      onPress={() => showDetailsModal()}>
      <View style={styles.carouselImageContainer}>
        <Image
          style={styles.carouselImage}
          source={source}
          nativeID={'fromIdImage'}
        />
      </View>
      <View style={styles.carouselTextContainer}>
        <Text style={styles.carouselTitle}>{title}</Text>
        <Text style={styles.carouselSubtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  carouselTouchableOpacity: {
    width: 100,
    height: 'auto',
    paddingBottom: 1,
    borderRadius: 12,
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
  },
  carouselImageContainer: {
    height: 250,
  },
  carouselImage: {
    position: 'absolute',
    resizeMode: 'cover',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  carouselTextContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: 'white',
    elevation: 1,
    borderTopColor: 'white',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  carouselTitle: {
    color: 'black',
    fontSize: 14,
    paddingBottom: 6,
    textTransform: 'uppercase',
  },
  carouselSubtitle: {
    color: 'gray',
    fontSize: 16,
  },
});

export default Card;
