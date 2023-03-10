import { Image, Text, View } from "react-native";

import localImages from "../../utils/localImages";

const Home = () => {
  return (
    <View>
      <Image source={localImages.demo} />
      <Text>Demo page</Text>
    </View>
  );
};

export default Home;
