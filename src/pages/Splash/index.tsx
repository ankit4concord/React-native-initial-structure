import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Splash = (props: any) => {
  const { navigation } = props;
  const token = useSelector((store: any) => store.Auth.user_token);
  const checkAuthorization = async () => {
    if (token !== null) {
      navigation.navigate('Private');
    } else {
      navigation.navigate('Login');
    }
  };

  useEffect(() => {
    checkAuthorization();
  }, [token]);

  return <></>;
};

export default Splash;
