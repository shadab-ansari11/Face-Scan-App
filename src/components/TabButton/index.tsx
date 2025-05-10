import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface ButtonProps {
  type: 'blue' | 'transparent';
  onPress: () => void;
  title: string;
}

function TabButton(props: ButtonProps) {
  const {type, onPress, title} = props;
  const buttonStyles: ViewStyle =
    type === 'transparent' ? styles.transparentButton : styles.blueButton;
  const textStyles: TextStyle =
    type === 'transparent' ? styles.blackText : styles.whiteText;

  return (
    <TouchableOpacity style={[styles.button, buttonStyles]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    width: 345,
    height: 44,
  },
  blueButton: {
    backgroundColor: '#005CFF',
  },
  transparentButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#05122B',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '400',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  blackText: {
    color: '#000000',
  },
});

export default TabButton;
