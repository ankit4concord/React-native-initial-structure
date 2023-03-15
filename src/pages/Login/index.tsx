import {
  getRequest,
  postRequest,
  setAuthorizationToken,
} from "../../utils/axios";

import { Button } from "react-native";
import api_endpoints from "../../utils/api_endpoints";
import { useEffect } from "react";

const Login = ({ navigation }: any) => {
  const getEntries = async () => {
    const loginData = {
      inputParams: {
        badgeNumber: 1000001203,
        warehouseName: "MAIN",
        deviceName: "SWLP128-KRISHNA",
        deviceIP: "fe80::f162:d421:4a2b:ceb2%22",
        appVersion: "1.2.5.6",
      },
    };
    const response = await postRequest(api_endpoints.userLogin, loginData);
    console.log(response?.data, "response");
  };

  useEffect(() => {
    // setAuthorizationToken("Hello123");
    getEntries();
  }, []);

  return <Button title="Login" onPress={() => navigation.navigate("Home")} />;
};

export default Login;
