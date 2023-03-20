import Home from '../pages/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Private = createNativeStackNavigator();

export default function PrivateRoutes() {
  return (
    <Private.Navigator>
      <Private.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Private.Navigator>
  );
}
