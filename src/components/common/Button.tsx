import {
  TouchableOpacity,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { GothamFontText } from './GuathamFontText';
import { BtnPropsInterface } from 'src/types/common';
import colors from 'utils/colors';

export default function CustomBtn({
  onPress,
  disable = false,
  isLoading = false,
  label = 'Click me',
  buttonStyle,
  textStyle,
  buttonColor,
  icon = [],
}: BtnPropsInterface) {
  return (
    <TouchableOpacity
      disabled={disable}
      style={[
        styles.button,
        {
          ...buttonStyle,
          backgroundColor:
            disable || isLoading ? colors.lightGray : buttonColor,
        },
      ]}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <View>
          <GothamFontText
            style={[styles.text, { ...textStyle }]}
            label={label}
            isIcon={icon}
          />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent',
    width: '100%',
    padding: 20,
    //height: 55,
    justifyContent: 'center',
    borderRadius: 50,
  },

  text: {
    color: '#fff',
    fontSize: 16,
    //fontFamily: 'Gotham',
    fontStyle: 'normal',
    alignSelf: 'center',
    fontWeight: '350',
    lineHeight: 19,
  },
});
