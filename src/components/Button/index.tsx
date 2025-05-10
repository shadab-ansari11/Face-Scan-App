/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {IInputProps, View} from 'native-base';

interface IProps {
  value: any;
  onPressHandler: (() => void) | undefined;
  textcolor?: undefined;
  disabled?: boolean;
  Icon?: any;
  styles?: any;
  btnText?: any;
}
export function Title(props: IInputProps) {
  const {children, ...rest} = props;
  return <Text {...rest}>{children}</Text>;
}
export function SubTitle(props: IInputProps) {
  const {children, ...rest} = props;
  return <Text {...rest}>{children}</Text>;
}
function Button(props: IProps) {
  const {value, onPressHandler, disabled, Icon, styles, btnText} = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles}
      onPress={onPressHandler}>
      <SubTitle style={btnText}>{value}</SubTitle>
      <View p={2}>{Icon}</View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btnstyle: {
    backgroundColor: 'lightblue',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 4,
    flexDirection: 'row',
  },
  btnText: {
    color: 'white.200',
    fontSize: 20,
  },
});
export default Button;
