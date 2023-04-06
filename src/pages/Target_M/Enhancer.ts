import { getRequest, postRequest, setAuthorizationToken } from 'utils/axios';
import { useState, useEffect } from 'react';
import api_endpoints from 'utils/api_endpoints';
import { LoginData } from 'src/types/auth';
import { useDispatch } from 'react-redux';
import { setUserToken } from 'src/store/Slices/authSlice';
import { TargetMFields } from 'src/types/target_m';

const useEnhancer = (props: any) => {
  const dispatch = useDispatch();
  const [vendors, setVendors] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getVendorList();
  }, []);

  const getVendorList = async () => {
    const response: any = await getRequest(api_endpoints.getVendorList);

    if (response?.success) {
      setVendors(response?.data);
    }
  };

  const getWarehouseList = async () => {
    const response: any = await getRequest(
      api_endpoints.listWarehouse,
      'https://dev-razorback-eapi-d7w61g.5sc6y6-4.usa-e2.cloudhub.io',
    );

    if (response?.success) {
      console.log(response?.data, 'warehouse list');
    }
  };

  const handleTargetMForm = (values: TargetMFields) => {
    console.log(values, 'TargetM form values');
  };

  return {
    getWarehouseList,
    vendors,
    categories,
    handleTargetMForm,
  };
};
export default useEnhancer;
