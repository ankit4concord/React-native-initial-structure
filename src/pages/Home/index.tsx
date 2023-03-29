import { Button, Image, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import localImages from '../../utils/localImages';
import { pushItems } from '../../store/Slices/demo';
import { useEffect } from 'react';

const Home = (props: any) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const items = useSelector((store: any) => store.demo.items);

  useEffect(() => {
    console.log(items, 'items');
    navigation.navigate('Login');
  }, [items]);

  return (
    <View>
      <Image source={localImages.demo} />
      <Text>Demo page</Text>
      <Button
        title="Check redux"
        onPress={() => dispatch(pushItems('ankit'))}
      />
    </View>
  );
};

export default Home;
