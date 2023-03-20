import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNavigator from './RootNavigator';

export default function Router() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
