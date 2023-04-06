import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface formErrors {
  error: string | undefined;
}

const FieldError = ({ error }: formErrors) => (
  <>{error && <Text style={styles.Error}>{error}</Text>}</>
);

const styles = StyleSheet.create({
  Error: { fontSize: 15, marginLeft: 10, color: 'red' },
});

export default FieldError;
