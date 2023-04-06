import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { StyleSheet } from 'react-native';

const CustomDropdown = ({ selectedValue, data, onValueChange }: any) => {
  return (
    <Picker
      selectedValue={selectedValue}
      mode="dropdown"
      onValueChange={onValueChange}>
      {data.map((item: any, itemIndex: number) => (
        <Picker.Item
          label={item.vendorName}
          value={item.vendorName}
          key={item.id || itemIndex}
        />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({});

export default CustomDropdown;
