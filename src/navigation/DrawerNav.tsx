/**
 * @format
 */
import React from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
  DrawerScreenProps,
} from '@react-navigation/drawer';

import {
  CompositeNavigationProp,
  CompositeScreenProps,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParamList} from '.';
import Home from '../screens/Home';
// import Dashboard from './HomeTab';

export type DrawerParamList = {
  Home: undefined;
  About: undefined;
};

export type DrawerNavProps<T extends keyof DrawerParamList> =
  CompositeScreenProps<
    DrawerScreenProps<DrawerParamList, T>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootStackNavigationProps<Screen extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, Screen>;

export type AppNavigationType<T extends keyof DrawerParamList> =
  CompositeNavigationProp<
    DrawerNavigationProp<DrawerParamList, T>,
    NativeStackNavigationProp<RootStackParamList>
  >;

const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerNav() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {width: '85%'},
      }}>
      <Drawer.Screen component={Home} name="Home" />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
