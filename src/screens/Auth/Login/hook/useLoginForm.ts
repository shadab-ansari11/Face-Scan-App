/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * @format
 */
import * as Yup from 'yup';
import {FormikHelpers, useFormik} from 'formik';

export interface ILogin {
  email: string;
  password: string;
}

const defaultValues: ILogin = {
  email: '',
  password: '',
};

const schema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .min(2, 'Invalid name!')
    .required('Name is required!'),

  password: Yup.string()
    .min(3, 'Display name should be 8 to 128 characters long.')
    .required('Please enter a password!'),
});

export const useLoginForm = (
  onSubmit: (
    values: ILogin,
    formikHelpers: FormikHelpers<ILogin>,
  ) => void | Promise<unknown>,
  initialValues: ILogin = defaultValues,
) => {
  return useFormik<ILogin>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};
