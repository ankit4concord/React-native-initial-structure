import { postRequest, setAuthorizationToken } from 'utils/axios';

import api_endpoints from 'utils/api_endpoints';
import { LoginData } from 'src/types/auth';
import { useDispatch } from 'react-redux';
import { setUserToken } from 'src/store/Slices/authSlice';

const useEnhancer = (props: any) => {
  const dispatch = useDispatch();

  const checkLogin = async (loginData: LoginData) => {
    console.log(loginData, 'loginData');

    const temploginData = {
      grant_type: ' client_credentials',
      scope: 'api://c7bde702-779b-476e-a3e7-50c27fa5e4e5/.default',
      client_id: 'c7bde702-779b-476e-a3e7-50c27fa5e4e5',
      client_secret: '6ld8Q~ijsqQEqb.J7DFYR9Qi1HvyB21ookaM9cK7',
    };

    const response: any = await postRequest(
      api_endpoints.getJWT,
      temploginData,
      {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      },
    );

    if (response?.token_type === 'Bearer') {
      setAuthorizationToken(response?.access_token);
      dispatch(setUserToken(response?.access_token));
    }
  };

  return {
    checkLogin,
  };
};
export default useEnhancer;
