import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Text, Checkbox as BaseCheckBox} from 'react-native-paper';

type CheckboxProps = Omit<
  React.ComponentProps<typeof BaseCheckBox>,
  'status'
> & {
  checked: boolean | any;
  onChange?: () => void;
  label?: string;
  style?: StyleProp<ViewStyle>;
  checkboxStyle?: StyleProp<ViewStyle>;
};

function Checkbox(props: CheckboxProps) {
  const {
    checked = false,
    onChange,
    label,
    style,
    checkboxStyle,
    uncheckedColor = '#bcbcbc',
    ...rest
  } = props;

  const Container = (onChange ? TouchableOpacity : View) as React.ElementType;

  return (
    <Container style={[styles.container, style]} onPress={onChange}>
      <BaseCheckBox.Android
        {...rest}
        color="#0089e6"
        status={checked ? 'checked' : 'unchecked'}
        style={checkboxStyle}
        uncheckedColor={uncheckedColor}
      />
      {label ? (
        typeof label === 'string' ? (
          <Text style={styles.caption}>{label}</Text>
        ) : (
          label
        )
      ) : null}
    </Container>
  );
}

Checkbox.defaultProps = {
  label: '',
  style: {},
  checkboxStyle: {},
  onChange: undefined,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  caption: {
    marginLeft: 5,
    flexShrink: 1,
  },
});

export default Checkbox;
