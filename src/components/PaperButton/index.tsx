/**
 * @format
 */
import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as BaseComp} from 'react-native-paper';

type ButtonProps = React.ComponentProps<typeof BaseComp>;

export type CustomButtonProps = ButtonProps & {
  title: string | JSX.Element;
  children?: React.ReactNode;
  width?: string;
};

export function Button(props: CustomButtonProps) {
  const {title, width, ...rest} = props;

  return (
    <BaseComp
      contentStyle={[styles.buttonText]}
      mode="contained"
      style={[styles.button, {width}]}
      theme={{roundness: 2}}
      uppercase={false}
      {...rest}>
      {title}
    </BaseComp>
  );
}

Button.defaultProps = {
  children: undefined,
  width: '100%',
};

const styles = StyleSheet.create({
  buttonText: {
    marginVertical: 7,
    width: '100%',
  },
  button: {
    backgroundColor: '#3c7ef3',
    marginVertical: 10,
    borderWidth: 1,
  },
});
