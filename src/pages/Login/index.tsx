import React from 'react';
import { Button } from 'react-native';

function Login({ navigation }: any) {
  return <Button title="Login" onPress={() => navigation.navigate('Home')} />;
}

export default Login;
