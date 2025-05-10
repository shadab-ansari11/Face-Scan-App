/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {Image, StyleSheet, View, Dimensions} from 'react-native';
import images from '../assets/images';
import {BaseText} from '../components/Typography';

const Tab = createBottomTabNavigator();
const height = Dimensions.get('window').height;

function HomeTab() {
  return (
    <Tab.Navigator
      initialRouteName="Contact"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#000',
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          height: height * 0.1,
          paddingLeft: 20,
          paddingRight: 20,
        },
        tabBarIcon: ({focused, size, color}) => {
          let url: any = '';
          let tintColor: string = '';

          if (route.name === 'Home') {
            url = focused ? images.HOME_BLUE_ICON : images.HOME_ICON;
            tintColor = focused ? '#005CFF' : '';
          } else if (route.name === 'Explore') {
            url = focused ? images.EXPLORE_BLUE_ICON : images.EXPLORE_ICON;
            tintColor = focused ? '#005CFF' : '';
          } else if (route.name === 'Favorite') {
            url = focused ? images.HEART_BLUE_ICON : images.HEART_ICON;
            tintColor = focused ? '#005CFF' : '';
          } else if (route.name === 'Profile') {
            url = focused ? images.BULLET_BLUE_ICON : images.BULLET_ICON;
            tintColor = focused ? '#005CFF' : '';
          }

          return (
            <View
              style={[styles.tabItem, tintColor ? styles.tabItemActive : {}]}>
              <Image alt="img" source={url} resizeMode="contain" style={styles.tabImg} />
              {tintColor && (
                <BaseText fontSize={12} fontWeight={600}>
                  {route.name}
                </BaseText>
              )}
              {/* {tintColor && route.name !== 'More' && (
                <BaseText fontSize={12} fontWeight={600}>
                  {route.name}
                </BaseText>
              )} */}
            </View>
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabItem: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'spa',
    gap: 2,
  },
  tabItemActive: {
    backgroundColor: '#F5F6F8',
    borderRadius: 5,
    padding: 8,
  },
  tabImg: {
    height: 26,
    width: 26,
  },
});

export default HomeTab;
