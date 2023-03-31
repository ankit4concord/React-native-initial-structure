import axios, { AxiosInstance } from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

export const axiosClient: AxiosInstance = axios.create({
  baseURL: Config.API_URL,
  timeout: 60000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'content-type': 'application/json',
  },
});
// Add a request interceptor
axiosClient.interceptors.request.use(
  async function (config) {
    // Do something before request is sent
    var basicAuth = await AsyncStorage.getItem('Authorization');
    if (basicAuth && basicAuth != null) {
      config.headers.Authorization = `Bearer ${basicAuth}`;
    } else {
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    if (response.data) return response.data;
    else {
      var message = 'We had trouble connecting to the server';
      if (response.data.message) message = response.data.message;
      return Promise.reject(response);
    }
  },
  function (error) {
    return Promise.reject(error);
  },
);

async function getRequest(URL: string, baseURL?: string) {
  try {
    if (baseURL) {
      // In case baseURL is different
      axiosClient.defaults.baseURL = baseURL;
      setTimeout(() => {
        axiosClient.defaults.baseURL = Config.API_URL; // to set back baseURL to original
      }, 10);
    }
    const response = await axiosClient.get(URL);
    return response;
  } catch (error) {
    return console.log('URL', error);
  }
}

async function postRequest(
  URL: string,
  payload: object,
  additionalHeaders?: object,
  baseURL?: string,
) {
  try {
    if (baseURL) {
      // In case baseURL is different
      axiosClient.defaults.baseURL = baseURL;
      setTimeout(() => {
        axiosClient.defaults.baseURL = Config.API_URL; // to set back baseURL to original
      }, 10);
    }
    const response = await axiosClient.post(URL, payload, additionalHeaders);
    return response;
  } catch (error) {
    return console.log('URL', error);
  }
}

const setAuthorizationToken = async (token: string | null) => {
  if (token) {
    await AsyncStorage.setItem('Authorization', token);
    axiosClient.defaults.headers.authorization = `Bearer ${token}`;
  }
};

const removeAuthorizationToken = async () => {
  await AsyncStorage.removeItem('Authorization');
};

export {
  getRequest,
  postRequest,
  setAuthorizationToken,
  removeAuthorizationToken,
};

export default axiosClient;
