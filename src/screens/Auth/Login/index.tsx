/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, Button, Alert} from 'react-native';
import {Divider} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../../../assets/images';
import HeaderSimple from '../../../components/HeaderSimple';
import {
  BaseText,
  BaseView,
} from '../../../components/Typography/index';
import {useAppTheme} from '../../../theme';
import {useLoginForm, ILogin} from './hook/useLoginForm';
import TextInputView from '../../../components/TextInputView';
import {ILoginRequest, useApiActions} from '../query/useApiActions';

interface IProps {
  navigation: any;
}
const initialValues: ILoginRequest = {
  email: '',
  password: '',
};
function Login(props: IProps) {
  const {navigation} = props;
  const {tryLogin} = useApiActions();
  const theme = useAppTheme();

  const onSubmit = async (values: ILoginRequest) => {
    await tryLogin(values);
  };
  const formik = useLoginForm(onSubmit, initialValues);
  const {
    handleChange,
    handleSubmit,
    values,
    touched,
    errors,
    handleBlur,
    isSubmitting,
    resetForm,
  } = formik;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <HeaderSimple
        isBack
        bg="transparent"
        color={theme.colors.appWhite['600']}
      />
      <BaseView alignItems="center">
        <BaseView bottom={5} position="absolute">
          <BaseText textAlign="center" fontSize={33} fontFamily="Satoshi-Bold">
            Login
          </BaseText>
        </BaseView>
      </BaseView>
      <BaseView p={5}>
        <TextInputView
          placeholder="Email"
          onPressHandler={handleChange('email')}
          value={values.email}
          keyboardType="email-address"
          error={touched.email && errors.email}
          onBlurHandler={handleBlur('email')}
        />
        <Divider bg={theme.colors.appWhite[200]} />
        <TextInputView
          placeholder="Enter Password"
          onPressHandler={handleChange('password')}
          isSecure
          value={values.password}
          error={touched.password && errors.password}
          onBlurHandler={handleBlur('password')}
        />
        <Button onPress={handleSubmit} title="Login" />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}>
          <BaseText
            textAlign="right"
            pt={2}
            fontSize={12}
            color={theme.colors.blue[300]}>
            Forgot Password?
          </BaseText>
        </TouchableOpacity>
      </BaseView>
      <BaseView px={5} flexDirection="row" alignItems="center">
        <BaseView flex={1} height={0.3} backgroundColor="#979797" />
        <BaseView>
          <BaseText color="#262B27" width={50} textAlign="center">
            Or
          </BaseText>
        </BaseView>
        <BaseView flex={1} height={0.3} backgroundColor="#979797" />
      </BaseView>
      <BaseView flexDir="row" justifyContent="space-between" p={5}>
        <BaseView
          borderRadius={10}
          justifyContent="center"
          alignItems="center"
          bg="#fff"
          width={109.32}
          height={78}>
          <Image alt="img" source={images.AUTH_GOOGLE} />
          <BaseText fontSize={10}>Google</BaseText>
        </BaseView>
        <BaseView
          borderRadius={10}
          justifyContent="center"
          alignItems="center"
          bg="#fff"
          width={109.32}
          height={78}>
          <Image alt="img" source={images.AUTH_FB} />
          <BaseText fontSize={10}>Facebook</BaseText>
        </BaseView>
        <BaseView
          borderRadius={10}
          justifyContent="center"
          alignItems="center"
          bg="#fff"
          width={109.32}
          height={78}>
          <Image alt="img" source={images.AUTH_APPLE} />
          <BaseText fontSize={10}>Apple</BaseText>
        </BaseView>
      </BaseView>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  fullScreen: {
    width: '100%',
    height: '100%',
    paddingTop: 10,
  },
});
