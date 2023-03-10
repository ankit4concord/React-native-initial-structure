import { Button } from "react-native";

const Login = ({ navigation }: any) => {
  return <Button title="Login" onPress={() => navigation.navigate("Home")} />;
};

export default Login;
