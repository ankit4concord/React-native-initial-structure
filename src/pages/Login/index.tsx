import { Button, Text } from 'react-native';

import Config from 'react-native-config';
import React from 'react';
import { setAuthorizationToken } from '../../utils/axios';
import { useEffect } from 'react';
import useEnhancer from './Enhancer';

const Login = (props: any) => {
  const { checkLogin } = useEnhancer(props);

  useEffect(() => {
    setAuthorizationToken('Hello123');
  }, []);

  return (
    <>
      <Button title="Login" onPress={() => checkLogin()} />
      <Text>Current API_URL is {Config.API_URL}</Text>
    </>
  );
};

export default Login;
