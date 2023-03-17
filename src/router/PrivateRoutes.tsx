import React, { useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "../pages/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Private = createNativeStackNavigator();

export default function PrivateRoutes({ navigation }: any) {
  const checkAuthorization = async () => {
    var basicAuth = await AsyncStorage.getItem("Authorization");
    if (basicAuth === null) {
      navigation.navigate("Auth");
    }
  };

  useEffect(() => {
    checkAuthorization();
  }, []);

  return (
    <Private.Navigator>
      <Private.Screen
        name={"Home"}
        component={Home}
        options={{ headerShown: false }}
      />
    </Private.Navigator>
  );
}
