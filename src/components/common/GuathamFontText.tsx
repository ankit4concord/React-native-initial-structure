import * as React from 'react';
import { Text, View } from 'react-native';

export function GothamFontText(props: any) {
  return (
    <View>
      <Text key={Math.random() * 2} {...props}>
        {props.isIcon}
        {props.label}
      </Text>
    </View>
  );
}
