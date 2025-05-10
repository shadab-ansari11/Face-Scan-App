import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
  View,
  Alert,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {IRegistration, useRegistrationForm} from './hooks/useRegistrationForm';
import {Divider} from 'native-base';
import {BaseText, BaseView} from '../../../components/Typography/index';
import TextInputView from '../../../components/TextInputView';
import {useAppTheme} from '../../../theme';
import {saveUser} from '../../../utils/storage';

interface IProps {
  navigation: any;
}

const initialValues: IRegistration = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  faceScan: '', // this will hold image uri
};

function Registration(props: IProps) {
  const {navigation} = props;
  const theme = useAppTheme();

  const onSubmit = async (values: IRegistration) => {
  if (!values.faceScan) {
    console.log("value--->",values.faceScan)
    Alert.alert('Error', 'Please capture your face to register.');
    return;
  }
  // Save to MMKV
  saveUser(values);
  console.log("save value", values);
  Alert.alert('Success', 'Registered successfully!', [
    {
      text: 'OK',
      onPress: () => navigation.navigate('Login'),
    },
  ]);
};

  const formik = useRegistrationForm(onSubmit, initialValues);
  const {
    handleChange,
    handleSubmit,
    values,
    touched,
    errors,
    handleBlur,
  } = formik;

  const openCamera = async () => {
    const result = await launchCamera({
      mediaType: 'photo',
      cameraType: 'front',
      quality: 0.5,
      includeBase64: true,
    });

    if (result.didCancel) return;

    if (result.assets && result.assets.length > 0) {
      const uri: any = result.assets[0].uri;
      handleChange('faceScan')(uri);
    }
  };

  return (
    <SafeAreaView style={styles.fullScreen}>
      <BaseView alignItems="center">
        <BaseView bottom={5} position="absolute">
          <BaseText
            textAlign="center"
            fontSize={33}
            fontFamily="Satoshi-Bold">
            Registration
          </BaseText>
        </BaseView>
      </BaseView>

      <BaseView p={5}>
        <TextInputView
          placeholder="First Name"
          onPressHandler={handleChange('firstName')}
          value={values.firstName}
          error={touched.firstName && errors.firstName}
          onBlurHandler={handleBlur('firstName')}
        />
        <Divider bg={theme.colors.appWhite[200]} />
        <TextInputView
          placeholder="Last Name"
          onPressHandler={handleChange('lastName')}
          value={values.lastName}
          error={touched.lastName && errors.lastName}
          onBlurHandler={handleBlur('lastName')}
        />
        <Divider bg={theme.colors.appWhite[200]} />
        <TextInputView
          placeholder="Email"
          onPressHandler={handleChange('email')}
          value={values.email}
          error={touched.email && errors.email}
          onBlurHandler={handleBlur('email')}
        />
        <Divider bg={theme.colors.appWhite[200]} />
        <TextInputView
          placeholder="Password"
          onPressHandler={handleChange('password')}
          value={values.password}
          error={touched.password && errors.password}
          onBlurHandler={handleBlur('password')}
        />
        <TextInputView
          placeholder="Confirm Password"
          onPressHandler={handleChange('confirmPassword')}
          value={values.confirmPassword}
          error={touched.confirmPassword && errors.confirmPassword}
          onBlurHandler={handleBlur('confirmPassword')}
        />

        <Divider my={2} />
        <Button title="Capture Face" onPress={openCamera} />
        {values.faceScan ? (
          <View style={{marginTop: 10, alignItems: 'center'}}>
            <Image
              source={{uri: values.faceScan}}
              style={{width: 100, height: 100, borderRadius: 50}}
            />
          </View>
        ) : null}

        <Divider my={2} />
        <Button onPress={handleSubmit} title="Registration" />
      </BaseView>
    </SafeAreaView>
  );
}

export default Registration;

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    justifyContent: "center",
    alignContent: 'center',
  },
});
