import Target_M from 'src/pages/Target_M';
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
      <Private.Screen
        name="Target_M"
        component={Target_M}
        options={{ headerShown: false }}
      />
    </Private.Navigator>
  );
}
