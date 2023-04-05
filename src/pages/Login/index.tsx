import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import useEnhancer from './Enhancer';
import { LoginForm } from 'components/Forms/LoginForm';

const Login = (props: any) => {
  const { checkLogin } = useEnhancer(props);

  return (
    <>
      <View style={styles.LoginForm}>
        <Text style={{ color: 'black', fontSize: 30 }}>CCM LOGIN</Text>
        <LoginForm {...{ checkLogin }} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  LoginForm: { marginTop: 50, padding: 30 },
});

export default Login;
