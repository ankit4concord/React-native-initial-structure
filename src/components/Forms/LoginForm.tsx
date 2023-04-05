import CustomBtn from 'components/common/Button';
import Input from 'components/common/Input';
import { Formik } from 'formik';
import { StyleSheet, Text, View } from 'react-native';
import colors from 'utils/colors';
import { loginValidationSchema } from './Validations/LoginFormSchema';

export const LoginForm = ({ checkLogin }: any) => (
  <Formik
    initialValues={{ username: '', password: '' }}
    validationSchema={loginValidationSchema}
    onSubmit={(values) => checkLogin(values)}>
    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
      <View>
        <Input
          onChangeText={handleChange('username')}
          onBlur={handleBlur('username')}
          value={values.username}
          placeholder="Enter username"
        />
        {errors.username && <Text style={styles.Error}>{errors.username}</Text>}
        <Input
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          placeholder="Enter password"
        />
        {errors.password && <Text style={styles.Error}>{errors.password}</Text>}
        <View style={styles.Submit}>
          <CustomBtn
            onPress={handleSubmit}
            label="Submit"
            buttonColor={colors.primary}
          />
        </View>
      </View>
    )}
  </Formik>
);

const styles = StyleSheet.create({
  Error: { fontSize: 15, marginLeft: 10, color: 'red' },
  LoginFormHeading: { color: 'black', fontSize: 30 },
  Submit: { marginTop: 15 },
});
