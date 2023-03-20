import React, { useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '../pages/Login';
import Splash from '../pages/Splash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Auth = createNativeStackNavigator();

export default function PublicRoutes() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        name="Login"
        component={Login}
        options={{ title: 'Login' }}
      />
    </Auth.Navigator>
  );
}
