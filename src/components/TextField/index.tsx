/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Box,
  FormControl,
  IInputProps,
  Input,
  Text,
  View,
  WarningOutlineIcon,
} from 'native-base';
import React from 'react';
import {StyleSheet, TextInput, TextStyle, ViewStyle} from 'react-native';

export type KeyboardType =
  | 'default'
  | 'email-address'
  | 'numeric'
  | 'phone-pad'
  | 'number-pad'
  | 'decimal-pad';

interface IRenderInputProps extends IInputProps {
  label?: string;
  error?: string;
  labelStyles?: TextStyle;
  showCount?: boolean;
  containerStyles?: ViewStyle;
  editable?: boolean;
  InputRightElement?: React.ReactElement;
  keyboardType?: KeyboardType;

}

const TextFieldView = React.forwardRef<TextInput, IRenderInputProps>(
  (props: IRenderInputProps, ref) => {
    const {
      showCount,
      error,
      label,
      labelStyles,
      containerStyles,
      style,
      InputRightElement,
      keyboardType,
      ...restProps
    } = props;

    return (
      <Box alignItems="center" style={containerStyles}>
        <FormControl isInvalid={false}>
          {label ? (
            <Text
              color="#000"
              fontWeight="500"
              mb={-3}
              mt={3}
              style={labelStyles}>
              {label}
            </Text>
          ) : null}
          <Input
            backgroundColor={!props.editable ? `${'#fff'}20` : '#fff'}
            borderRadius={8}
            fontSize="sm"
            minHeight={props.minHeight ?? props.multiline ? '200px' : '48px'}
            placeholderTextColor="#000"
            maxLength={100}
            keyboardType={keyboardType}
            ref={ref}
            size="md"
            style={[styles.input, style]}
            {...restProps}
            InputRightElement={InputRightElement}
          />
          {showCount ? (
            <Text
              color="gray.500"
              fontSize="xs"
              position="absolute"
              right={1}
              top={label ? '12px' : '-12px'}>
              {props.value?.length}/{props.maxLength}
            </Text>
          ) : null}
          {error ? (
            <View flexDirection="row" mt={2} pr={2} width="100%">
              <WarningOutlineIcon
                size="xs"
                style={[{color: 'red.900'}, styles.errorIconStyle]}
              />
              <Text color="red.900" width="98%">
                {error}
              </Text>
            </View>
          ) : null}
        </FormControl>
      </Box>
    );
  },
);

TextFieldView.defaultProps = {
  label: undefined,
  error: undefined,
  labelStyles: {},
  containerStyles: {},
  showCount: false,
  editable: true,
  keyboardType: 'default',
};

const styles = StyleSheet.create({
  input: {
    minHeight: 48,
    borderWidth: 0,
  },
  errorIconStyle: {
    marginTop: 5,
    marginRight: 5,
  },
});

const TextField = React.memo(TextFieldView);
export {TextField};
