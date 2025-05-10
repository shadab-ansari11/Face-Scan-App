import {IInputProps, View, Text} from 'native-base';
import React from 'react';

export function Title(props: IInputProps) {
  const {children, ...rest} = props;

  return (
    <Text fontFamily="Satoshi-Bold" fontWeight={600} {...rest}>
      {children}
    </Text>
  );
}

export function SubTitle(props: IInputProps) {
  const {children, ...rest} = props;
  return (
    <Text fontFamily="Satoshi-Regular" fontWeight={400} {...rest}>
      {children}
    </Text>
  );
}

export function Caption(props: IInputProps) {
  const {children, ...rest} = props;
  return (
    <Text fontFamily="Satoshi-Regular" fontWeight={400} {...rest}>
      {children}
    </Text>
  );
}

export function BaseView(props: IInputProps) {
  const {children, ...rest} = props;
  return <View {...rest}>{children}</View>;
}

export function BaseText(props: IInputProps) {
  const {children, ...rest} = props;
  return <Text {...rest}>{children}</Text>;
}
