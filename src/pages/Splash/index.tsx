import { useEffect } from 'react';
import { Text } from 'react-native';
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

  return <Text>Loading...</Text>;
};

export default Splash;
