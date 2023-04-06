import CustomBtn from 'components/common/Button';
import Input from 'components/common/Input';
import { Formik } from 'formik';
import { StyleSheet, Text, View } from 'react-native';
import colors from 'utils/colors';
import { TargetM_Schema } from './Validations/TargetM_Schema';
import CustomDropdown from 'components/common/Dropdown';
import FieldError from 'components/common/FieldError';

export const Target_M_FORM = ({ vendors, handleTargetMForm }: any) => (
  <Formik
    initialValues={{
      selectedVendor: '',
      pallateID: '',
      stockNumber: '',
      selectedCategory: '',
    }}
    validationSchema={TargetM_Schema}
    onSubmit={(values) => handleTargetMForm(values)}>
    {({
      handleChange,
      handleBlur,
      handleSubmit,
      values,
      errors,
      setFieldValue,
    }) => (
      <>
        <View>
          <Text>Select Vendor</Text>
          <CustomDropdown
            data={vendors}
            selectedValue={values.selectedVendor}
            onValueChange={(itemValue: string) =>
              setFieldValue('selectedVendor', itemValue)
            }
          />
          <FieldError error={errors.selectedVendor} />
        </View>

        <View>
          <Text>Scan Pallate</Text>
          <Input
            onChangeText={handleChange('pallateID')}
            onBlur={handleBlur('pallateID')}
            value={values.pallateID}
            placeholder="Scan Pallate"
          />
          <FieldError error={errors.pallateID} />
        </View>

        <View>
          <Text>Stock number</Text>
          <Input
            onChangeText={handleChange('stockNumber')}
            onBlur={handleBlur('stockNumber')}
            value={values.stockNumber}
            placeholder="Stock number"
          />
          <FieldError error={errors.stockNumber} />
        </View>

        <View>
          <Text>Select Category</Text>
          <CustomDropdown
            data={vendors}
            selectedValue={values.selectedCategory}
            onValueChange={(itemValue: string) =>
              setFieldValue('selectedCategory', itemValue)
            }
          />
          <FieldError error={errors.selectedCategory} />
        </View>

        <View style={styles.Submit}>
          <CustomBtn
            onPress={handleSubmit}
            label="Submit"
            buttonColor={colors.primary}
          />
        </View>
      </>
    )}
  </Formik>
);

const styles = StyleSheet.create({
  Submit: { marginTop: 15 },
  Error: { fontSize: 15, marginLeft: 10, color: 'red' },
});
