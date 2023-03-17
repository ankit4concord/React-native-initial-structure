import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Root = createNativeStackNavigator();
const RootNavigator = () => {
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
};

export default RootNavigator;
