import { Button, Image, Text, View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import localImages from 'utils/localImages';
import { pushItems } from 'src/store/Slices/demo';
import { useEffect } from 'react';
import { setUserToken } from 'src/store/Slices/authSlice';
import { removeAuthorizationToken } from 'utils/axios';
import useRootEnhancer from '../rootEnhancer';
import CustomBtn from 'components/common/Button';

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((store: any) => store.demo.items);
  const { getWarehouseList, getVendorList, deletePallate } = useRootEnhancer();

  useEffect(() => {
    console.log(items, 'items');
  }, [items]);

  return (
    <ScrollView>
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
      <Button
        title="Get Warehouse List"
        onPress={() => {
          getWarehouseList();
        }}
      />
      <Button
        title="Get Vendor List"
        onPress={() => {
          getVendorList();
        }}
      />
      <Button
        title="Delete Pallat"
        onPress={() => {
          deletePallate();
        }}
      />
      {/* <CustomBtn
        label="Delete Pallat"
        onPress={() => {
          deletePallate();
        }}
        buttonColor={'grey'}
      /> */}
    </ScrollView>
  );
};

export default Home;
