import * as yup from 'yup';

export const TargetM_Schema = yup.object().shape({
  selectedVendor: yup.string().required('Please select vendor'),
  pallateID: yup.string().required('Please enter pallate id'),
  stockNumber: yup.string().required('Please enter stock number'),
  selectedCategory: yup.string().required('Please select category'),
});
