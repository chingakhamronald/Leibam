import {Animated, Dimensions, Image, StyleSheet, View} from 'react-native';
import React, {FC, useCallback, useEffect, useRef} from 'react';
import {styleMain} from '../styles';

const Splash: FC = () => {
  const moveAnimation = useRef(new Animated.Value(0)).current;

  const animated = useCallback(() => {
    Animated.timing(moveAnimation, {
      toValue: Dimensions.get('window').width / 2 - 90,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [moveAnimation]);

  useEffect(() => {
    animated();
  }, [animated]);

  return (
    <View style={styleMain.flex}>
      <View style={styles.wrapper}>
        <Image
          resizeMode="contain"
          source={{
            uri: 'https://pngimg.com/uploads/nike/nike_PNG11.png',
            height: 200,
            width: 200,
          }}
          style={{alignSelf: 'center'}}
        />

        <Animated.Text
          style={[
            styles.text,
            {
              transform: [
                {
                  translateX: moveAnimation,
                },
              ],
            },
          ]}>
          Loading
        </Animated.Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    textTransform: 'uppercase',
    letterSpacing: 15,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
});
