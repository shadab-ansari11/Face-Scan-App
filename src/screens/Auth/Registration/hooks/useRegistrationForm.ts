import * as Yup from 'yup';
import { FormikHelpers, useFormik } from 'formik';

export interface IRegistration {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  faceScan: string; // assume base64 image string or file path
}

const defaultValues: IRegistration = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  faceScan: '',
};

const schema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .min(2, 'First name must be at least 2 characters.')
    .required('First name is required!'),

  lastName: Yup.string()
    .trim()
    .min(2, 'Last name must be at least 2 characters.')
    .required('Last name is required!'),

  email: Yup.string()
    .trim()
    .email('Invalid email format!')
    .required('Email is required!'),

  password: Yup.string()
    .min(8, 'Password should be 8 to 128 characters long.')
    .max(128, 'Password should be 8 to 128 characters long.')
    .required('Password is required!'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match!')
    .required('Confirm Password is required!'),

  faceScan: Yup.string().required('Face scan is required!'),
});

export const useRegistrationForm = (
  onSubmit: (
    values: IRegistration,
    formikHelpers: FormikHelpers<IRegistration>
  ) => void | Promise<unknown>,
  initialValues: IRegistration = defaultValues,
) => {
  return useFormik<IRegistration>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};
