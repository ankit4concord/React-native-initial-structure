import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React, { useState } from 'react';
import useEnhancer from './Enhancer';
import Input from 'components/common/Input';
import { LoginData } from 'src/types/auth';

const Login = (props: any) => {
  const { checkLogin } = useEnhancer(props);
  const [loginData, setLoginData] = useState<LoginData>({
    username: '',
    password: '',
  });

  return (
    <>
      <View style={styles.LoginForm}>
        <Text style={{ color: 'black', fontSize: 30 }}>CCM LOGIN</Text>
        <Input
          placeholder="Enter Username"
          value={loginData?.username}
          onChangeText={(username: string) =>
            setLoginData({ ...loginData, username: username })
          }
        />
        <Input
          placeholder="Enter Password"
          value={loginData?.password}
          onChangeText={(password: string) =>
            setLoginData({ ...loginData, password: password })
          }
        />
        <View style={{ padding: 10 }}>
          <TouchableOpacity>
            <Button title="Login" onPress={() => checkLogin(loginData)} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  LoginForm: { marginTop: 50, padding: 30 },
});

export default Login;
