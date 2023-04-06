import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: any;
  onBlur?: any;
}

const Input = ({ placeholder, value, onChangeText, onBlur }: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    paddingHorizontal: 10,
  },
});

export default Input;
