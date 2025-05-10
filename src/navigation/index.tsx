/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import DrawerNav from './DrawerNav';
import Home from '../screens/Home';
import Login from '../../src/screens/Auth/Login';
import Registration from '../../src/screens/Auth/Registration';
import ForgotPassword from '../../src/screens/Auth/ForgotPassword';
import SplashScreen from '../components/SplashScreen';
import LandingPage from '../../src/screens/Auth/LandingPage';
import useUserInfo from '../hook/useUserInfo';

export type RootStackParamList = {
  LandingPage: undefined;
  SplashScreen: undefined;
  DrawerNav: undefined;
  Login: undefined;
  Registration: undefined;
  ForgotPassword: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function NavContainer() {
  const {isLoggedIn} = useUserInfo();
  console.log('isLoggedIn', isLoggedIn);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LandingPage"
          screenOptions={{headerShown: false}}>
          {!isLoggedIn ? (
            <>
              <Stack.Screen component={SplashScreen} name="SplashScreen" />
              <Stack.Screen component={LandingPage} name="LandingPage" />
              <Stack.Screen component={Login} name="Login" />
              <Stack.Screen component={Registration} name="Registration" />
              <Stack.Screen component={ForgotPassword} name="ForgotPassword" />
            </>
          ) : (
            <>
              <Stack.Screen component={DrawerNav} name="DrawerNav" />
              <Stack.Screen component={Home} name="Home" />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default NavContainer;
