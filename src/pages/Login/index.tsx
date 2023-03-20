import { Button } from 'react-native';
import React from 'react';
import { setAuthorizationToken } from '../../utils/axios';
import { useEffect } from 'react';
import useEnhancer from './Enhancer';

const Login = (props: any) => {
  const { navigation } = props;
  const { checkLogin } = useEnhancer();

  useEffect(() => {
    setAuthorizationToken('Hello123');
    checkLogin();
  }, []);

  return (
    <Button title="Login" onPress={() => navigation.navigate('Private')} />
  );
};

export default Login;
