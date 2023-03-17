import React, { useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "../pages/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Auth = createNativeStackNavigator();

export default function PublicRoutes({ navigation }: any) {
  const checkAuthorization = async () => {
    var basicAuth = await AsyncStorage.getItem("Authorization");
    if (basicAuth && basicAuth !== null) {
      navigation.navigate("Private");
    }
  };

  useEffect(() => {
    checkAuthorization();
  }, []);

  return (
    <Auth.Navigator>
      <Auth.Screen
        name={"Login"}
        component={Login}
        options={{ title: "Login" }}
      />
    </Auth.Navigator>
  );
}
