import { getRequest, postRequest } from 'utils/axios';

import api_endpoints from 'utils/api_endpoints';

const useRootEnhancer = () => {
  const getWarehouseList = async () => {
    const response: any = await getRequest(
      api_endpoints.listWarehouse,
      'https://dev-razorback-eapi-d7w61g.5sc6y6-4.usa-e2.cloudhub.io',
    );

    if (response?.success) {
      console.log(response?.data, 'warehouse list');
    }
  };

  const getVendorList = async () => {
    const response: any = await getRequest(api_endpoints.getVendorList);

    if (response?.success) {
      console.log(response?.data, 'Vendor list');
    }
  };

  const deletePallate = async () => {
    let deletePallateData = {
      inputParams: {
        palletID: 23472213,
      },
    };
    const response: any = await postRequest(
      api_endpoints.deletePallate,
      deletePallateData,
    );

    if (response?.success) {
      console.log(response?.data, 'Vendor list');
    }
  };

  return {
    getWarehouseList,
    getVendorList,
    deletePallate,
  };
};
export default useRootEnhancer;
