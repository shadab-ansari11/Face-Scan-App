import React, {useEffect, useState} from 'react';
import { Title} from '../Typography';
import {
  StyleSheet,
  Dimensions,
  StatusBar,
  View,
  Animated,
} from 'react-native';

interface ISplashScreen {
  navigation: any;
}

const {height, width} = Dimensions.get('window');

function SplashScreen(props: ISplashScreen) {
  const {navigation} = props;

  const [progress, setProgress] = useState<number>(0);

  const animate = new Animated.Value(0);

  useEffect(() => {
    onAnimate();
  }, []);

  function onAnimate() {
    animate.addListener(({value}) => {
      setProgress(value);
    });
    Animated.timing(animate, {
      duration: 6000,
      toValue: 100,
      useNativeDriver: false,
      delay: 500,
    }).start(({finished}) => {
      console.log(finished);
      if (finished) {
        setTimeout(() => {
          navigateHandler();
        }, 1000);
      }
    });
  }

  function navigateHandler() {
    navigation.navigate('Login');
  }

  return (
    <>
      <StatusBar backgroundColor="#002A74" />
        <View>
          <View style={styles.progressBox}>
            <View
              style={[
                {
                  width: `${progress}%`,
                  height: '100%',
                },
                styles.progress,
              ]}></View>
          </View>
          <Title fontSize={18} color="#fcfcfc" textAlign="center">
            {progress < 100
              ? `${Math.round(progress)}% loading...`
              : 'lets get started 🥳'}
          </Title>
        </View>
    </>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,

    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderBox: {
    textAlign: 'center',
  },
  progressBox: {
    width: width * 0.6,
    height: 8,
    borderRadius: 8,
    borderColor: '#fcfcfc',
    borderWidth: 1,
    marginBottom: 8,
  },
  progress: {
    backgroundColor: '#fcfcfc',
  },
});
