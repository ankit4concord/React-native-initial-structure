import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Root = createNativeStackNavigator();
function RootNavigator() {
  return (
    <Root.Navigator>
      <Root.Screen
        name="Auth"
        component={PublicRoutes}
        options={{ headerShown: false }}
      />
      <Root.Screen
        name="Private"
        component={PrivateRoutes}
        options={{ headerShown: false }}
      />
    </Root.Navigator>
  );
}

export default RootNavigator;
