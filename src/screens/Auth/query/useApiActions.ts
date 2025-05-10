/* eslint-disable @typescript-eslint/no-unused-vars */
import {useDispatch} from 'react-redux';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import client from '../../../utils/ApiClient';
import {login, logout} from '../../../redux/auth/authSlice';
import API_URLS from '../../../utils/endPoints';
import Toast from 'react-native-toast-message';
import {IResponseData} from '../../../config/interfaces';
import {RootStackParamList} from '../../../navigation';
import {storage} from '../../../utils/storage';

export type RootNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  any
>;
export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IRegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  faceScan: string; // assume base64 image string or file path
}

const useApiActions = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<RootNavigationType>();
  // API  userName: john@mail.com
  // API password changeme
  const tryLogin = async (values: ILoginRequest) => {
    try {
      const users = JSON.parse(storage.getString('users') || '[]');
      console.log('users', users);
      const matchedUser = users.find(
        (user: any) =>
          user.email === values.email && user.password === values.password,
      );
      console.log('matchedUser', matchedUser);
      if (matchedUser) {
        dispatch(
          login({
            userInfo: matchedUser,
            token: 'local-auth', // since it's mock, you can use a placeholder
            isLoggedIn: true,
          }),
        );

        Toast.show({
          type: 'success',
          text1: 'Login Successful',
        });

        // navigation.navigate('Home', {data: matchedUser});
      } else {
        Toast.show({
          type: 'error',
          text1: 'Invalid email or password',
        });
        dispatch(logout());
      }
    } catch (error: any) {
      console.log('Login error:', error);
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
      });
      dispatch(logout());
    }
  };

  const tryRegister = async (values: IRegisterRequest) => {
    try {
      // Retrieve existing users from storage (if any)
      const oldUsers = JSON.parse(storage.getString('users') || '[]');
      console.log('oldUsers', oldUsers);
      // Check if email already exists
      const userExists = oldUsers.find(
        (user: any) => user.email === values.email,
      );
      console.log('userExists', userExists);

      if (userExists) {
        Toast.show({
          type: 'error',
          text1: 'Email already exists',
          visibilityTime: 2500,
        });
        return;
      }

      // Validate password and confirmPassword match
      if (values.password !== values.confirmPassword) {
        Toast.show({
          type: 'error',
          text1: 'Passwords do not match',
          visibilityTime: 2500,
        });
        return;
      }

      // Check if face data (scan) is provided
      if (!values.faceScan) {
        Toast.show({
          type: 'error',
          text1: 'Please provide face scan data',
          visibilityTime: 2500,
        });
        return;
      }

      // Create the user object with additional fields
      const newUser = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        faceScan: values.faceScan, // Save face scan data
      };
      console.log('newUser', newUser);

      // Add new user to the list
      const updatedUsers = [...oldUsers, newUser];
      storage.set('users', JSON.stringify(updatedUsers)); // Save updated user list in storage
      console.log('updatedUsers', updatedUsers);
      Toast.show({
        type: 'success',
        text1: 'Registered Successfully',
        visibilityTime: 2500,
      });

      // Optionally, login the user after successful registration
      dispatch(
        login({
          userInfo: values.email,
          token: 'dummy-token', // Use a placeholder token or real token logic
          isLoggedIn: true,
        }),
      );

      // Navigate to login screen after successful registration
      navigation.navigate('Login');
    } catch (error) {
      console.log('Register error:', error);
      Toast.show({
        type: 'error',
        text1: 'Something went wrong during registration',
        visibilityTime: 2500,
      });
    }
  };

  return {
    tryLogin,
    tryRegister,
  };
};

export {useApiActions};
