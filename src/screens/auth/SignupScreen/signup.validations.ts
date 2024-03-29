import * as yup from 'yup';

const ValidPasswordRegex =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;

export const signupValidationSchema = yup
  .object({
    email: yup
      .string()
      .required('Please enter Email ID')
      .email('Invalid Email')
      .max(50, 'Email must not be 50 letters long'),
    firstName: yup.string().max(50, 'First name must not be 50 letters long'),
    lastName: yup.string().max(50, 'Last name must not be 50 letters long'),
    password: yup
      .string()
      .required('Please enter Password')
      .min(8, 'Password must be at least 8 letters long')
      .max(20, 'Password must not be 20 letters long'),
    confirmed_password: yup
      .string()
      .required('Please retype your password.')
      .oneOf([yup.ref('password')], 'Your passwords do not match.'),
  })
  .required();
