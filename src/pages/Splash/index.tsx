import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

const Splash = (props: any) => {
  const { navigation } = props;
  const checkAuthorization = async () => {
    const basicAuth = await AsyncStorage.getItem('Authorization');
    console.log(basicAuth);
    if (basicAuth && basicAuth !== null) {
      navigation.navigate('Private');
    } else {
      navigation.navigate('Login');
    }
  };

  useEffect(() => {
    checkAuthorization();
  }, []);

  return <></>;
};

export default Splash;
