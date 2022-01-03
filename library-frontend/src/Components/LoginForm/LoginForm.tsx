import React from 'react';
import { Form, FormikProps, Field } from 'formik';
import { LoginFormValues } from './LoginFormContainer';

interface LoginFormProps {
  formikProps: FormikProps<LoginFormValues>;
}

export const LoginForm: React.FC<LoginFormProps> = ({ formikProps }) => {
  return (
    <Form>
      <div>
        <Field
          fullWidth
          label="Email or username"
          name="login"
          variant="outlined"
          size="small"
          margin="dense"
          value={formikProps?.values?.email}
          onChange={formikProps?.handleChange('login')}
        />
      </div>
      <div >
        <Field
          fullWidth
          label="Password"
          name="password"
          autoComplete="current-password"
          variant="outlined"
          type="password"
          size="small"
          margin="dense"
          value={formikProps?.values?.password}
          onChange={formikProps?.handleChange('password')}
        />
      </div>
      <div >
        <button
          type="submit"
          disabled={!formikProps.isValid}
        >
          Login
        </button>
      </div>
    </Form>
  );
};
