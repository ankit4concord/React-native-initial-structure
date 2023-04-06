import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Target_M_FORM } from 'components/Forms/Target_M';
import useEnhancer from './Enhancer';

const Target_M = (props: any) => {
  const { getWarehouseList, vendors, handleTargetMForm } = useEnhancer(props);
  return (
    <View style={styles.ScanInfoForm}>
      <Target_M_FORM {...{ vendors, handleTargetMForm }} />
    </View>
  );
};

const styles = StyleSheet.create({
  ScanInfoForm: { marginTop: 50, padding: 30 },
});

export default Target_M;
