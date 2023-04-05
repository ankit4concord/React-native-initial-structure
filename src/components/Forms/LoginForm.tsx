import CustomBtn from 'components/common/Button';
import Input from 'components/common/Input';
import { Formik } from 'formik';
import { View } from 'react-native';
import colors from 'utils/colors';

export const LoginForm = ({ checkLogin }: any) => (
  <Formik
    initialValues={{ username: '', password: '' }}
    onSubmit={(values) => checkLogin(values)}>
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <Input
          onChangeText={handleChange('username')}
          onBlur={handleBlur('username')}
          value={values.username}
          placeholder="Enter username"
        />
        <Input
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          placeholder="Enter password"
        />
        <CustomBtn
          onPress={handleSubmit}
          label="Submit"
          buttonColor={colors.primary}
        />
      </View>
    )}
  </Formik>
);
