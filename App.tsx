import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Router from "./src/router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./src/store";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName={"Login"}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login" }}
          />
        </Stack.Navigator>
      </NavigationContainer> */}
      <Router />
    </Provider>
  );
};

export default App;
