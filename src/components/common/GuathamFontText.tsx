import * as React from 'react';
import { Text, View } from 'react-native';

export function GothamFontText(props) {
  return (
    <View>
      <Text key={Math.random() * 2} {...props}>
        {props.isIcon}
        {props.label}
      </Text>
    </View>
  );
}
