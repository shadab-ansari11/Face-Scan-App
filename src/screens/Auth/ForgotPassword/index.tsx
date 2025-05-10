/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, Button} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../../../assets/images';
import HeaderSimple from '../../../components/HeaderSimple';
import {BaseView, BaseText} from '../../../components/Typography/index';
import {RootStackParamList} from '../../../navigation';
import {
  IForgotPassword,
  useForgotPasswordForm,
} from './hook/useForgotPasswordForm';
import {useAppTheme} from '../../../theme';
import TextInputView from '../../../components/TextInputView';
import { useApiActions } from '../query/useApiActions';

export type RootNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  any
>;

function ForgotPassword() {
  const navigation = useNavigation<RootNavigationType>();
  const theme = useAppTheme();
  const {forgotPassword} = useApiActions();

  const initialValues = {
    email: '',
  };

  const onSubmit = async (values: IForgotPassword) => {
    if (values.email.length > 0) {
      const data: any = {
        email: values.email,
      };
      const response = await forgotPassword(data);
      if (response.status) {
        const resetUserPassword: any = {
          otp: response.otp,
          status: response.status,
          email: values.email,
        };
        navigation.navigate('ResetPassword', resetUserPassword);
      }
    }
  };

  const formik = useForgotPasswordForm(onSubmit, initialValues);

  const {
    handleChange,
    handleSubmit,
    values,
    touched,
    errors,
    handleBlur,
    isSubmitting,
  } = formik;

  return (
    <SafeAreaView
      style={[
        styles.fullScreen,
        {
          backgroundColor: '#e5e5e5',
        },
      ]}>
      <KeyboardAwareScrollView>
        <HeaderSimple
          isBack
          bg="transparent"
          color={theme.colors.appWhite['600']}
        />
        <BaseView alignItems="center">
          <Image
            alt="img"
            style={{position: 'relative'}}
            source={images.LAYER}
          />
          <BaseView bottom={5} position="absolute">
            <BaseText
              textAlign="center"
              fontSize={33}
              fontFamily="Satoshi-Bold">
              Forgot Password
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
          <Button onPress={()=> handleSubmit()} title="Sent" />
        </BaseView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default ForgotPassword;

const styles = StyleSheet.create({
  fullScreen: {
    width: '100%',
    height: '100%',
  },
});
