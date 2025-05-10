/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * @format
 */
import * as Yup from 'yup';
import {FormikHelpers, useFormik} from 'formik';

export interface IForgotPassword {
  email: string;
}

const defaultValues: IForgotPassword = {
  email: '',
};

const schema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .min(2, 'Invalid name!')
    .required('Name is required!'),
});

export const useForgotPasswordForm = (
  onSubmit: (
    values: IForgotPassword,
    formikHelpers: FormikHelpers<IForgotPassword>,
  ) => void | Promise<unknown>,
  initialValues: IForgotPassword = defaultValues,
) => {
  return useFormik<IForgotPassword>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};
