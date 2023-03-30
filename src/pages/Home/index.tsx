import { Button, Image, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import localImages from 'utils/localImages';
import { pushItems } from 'src/store/Slices/demo';
import { useEffect } from 'react';
import { setUserToken } from 'src/store/Slices/authSlice';
import { removeAuthorizationToken } from 'utils/axios';

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((store: any) => store.demo.items);

  useEffect(() => {
    console.log(items, 'items');
  }, [items]);

  return (
    <View>
      <Image source={localImages.demo} />
      <Text>Demo page</Text>
      <Button
        title="Check redux"
        onPress={() => dispatch(pushItems('ankit'))}
      />
      <Button
        title="Logout"
        onPress={() => {
          dispatch(setUserToken(null));
          removeAuthorizationToken();
        }}
      />
    </View>
  );
};

export default Home;
