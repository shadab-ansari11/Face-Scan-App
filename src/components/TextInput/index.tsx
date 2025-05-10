/* eslint-disable react-hooks/rules-of-hooks */
import {useColorModeValue} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {
  View,
  TextInput,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import {theme} from '../../theme';
import {BaseView} from '../../components/Typography';

export type KeyboardType =
  | 'default'
  | 'email-address'
  | 'numeric'
  | 'phone-pad'
  | 'number-pad'
  | 'decimal-pad';

interface IProps {
  propStyle?: StyleProp<ViewStyle>;
  placeholder: string;
  isSecure?: boolean;
  isMultiLine?: boolean;
  onPressHandler: ((text: string) => void) | undefined;
  onBlurHandler:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
  value: string | number;
  isNumberPad?: boolean;
  editable?: boolean;
  error?: string | undefined | boolean;
  offDarkMod?: boolean;
  keyboardType?: KeyboardType;
  maxLength?: number;
  isEdit?: boolean;
  isLocationIcon?: boolean;
  childrenIcon?: JSX.Element | any;
}

function CustomTextInput(props: IProps) {
  const {
    propStyle,
    placeholder,
    isSecure,
    isMultiLine,
    onPressHandler,
    value,
    isNumberPad,
    error,
    keyboardType,
    maxLength,
    onBlurHandler,
    editable,
    offDarkMod,
    isEdit = false,
    isLocationIcon = false,
    childrenIcon,
  } = props;

  // const bgColor =
  //   offDarkMod === true
  //     ? theme.colors.gray[500]
  //     : useColorModeValue(theme.colors.gray[500], theme.colors.black[6000]);

  // const bdColor =
  //   offDarkMod === true
  //     ? theme.colors.black[3000]
  //     : useColorModeValue(theme.colors.black[3000], theme.colors.gray[100]);
  return (
    <View style={[styles.inputWrapper, propStyle]}>
      <TextInput
        style={[
          styles.fullScreen,
          styles.input,
          {
            backgroundColor: '#fff',
            borderColor: theme.colors.gray[100],
            color: theme.colors.black[600],
          },
        ]}
        caretHidden={false}
        placeholderTextColor={theme.colors.black[600]}
        placeholder={placeholder}
        secureTextEntry={isSecure}
        editable={editable}
        multiline={isMultiLine}
        onChangeText={onPressHandler}
        value={value}
        // keyboardType={isNumberPad ? 'number-pad' : 'email-address'}
        keyboardType={keyboardType}
        // maxLength={isNumberPad ? 10 : undefined}
        maxLength={maxLength}
        onBlur={onBlurHandler}
      />

      {isEdit ? (
        <AntDesign
          name="edit"
          size={20}
          color={theme.colors.blue[300]}
          style={{position: 'absolute', right: 10, top: 23}}
        />
      ) : null}

      {isLocationIcon ? (
        <BaseView position="absolute" right={7} top={23}>
          {childrenIcon}
        </BaseView>
      ) : null}
      {error && (
        <Text style={styles.err_title} numberOfLines={1}>
          {error}
        </Text>
      )}
    </View>
  );
}

CustomTextInput.defaultProps = {
  isMultiLine: false,
  propStyle: null,
  isSecure: false,
  isNumberPad: false,
  error: null,
  editable: true,
  offDarkMod: false,
  maxLength: 75,
  keyboardType: 'default',
};
export default CustomTextInput;

const styles = StyleSheet.create({
  fullScreen: {
    width: '100%',
    height: '90%',
    position: 'relative',
  },

  inputWrapper: {
    height: 70,
    width: '100%',
  },
  input: {
    paddingLeft: 20,
    paddingRight: 40,
    borderWidth: 1,
    borderRadius: 10,
  },
  err_title: {
    color: theme.colors.red[900],
    opacity: 0.6,
    letterSpacing: 1,
    fontSize: 12,
  },
});
