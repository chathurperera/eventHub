import * as yup from 'yup';

export const loginErrorMessages = {
  'email:required': 'Please enter Email ID',
  'email:invalid': 'Invalid Email',
  'email:max': 'Email must not be 256 letters long',

  'password:required': 'Please enter Password',
  'password:min': 'Password should have at least 8 characters',
  'password:max': 'Password must be between 8 and 256 characters length',
};

export const loginValidationSchema = yup
  .object({
    email: yup
      .string()
      .required(loginErrorMessages['email:required'])
      .email(loginErrorMessages['email:invalid'])
      .max(256, loginErrorMessages['email:max']),
    password: yup
      .string()
      .required(loginErrorMessages['password:required'])
      .min(8, loginErrorMessages['password:min'])
      .max(256, loginErrorMessages['password:max']),
  })
  .required();
