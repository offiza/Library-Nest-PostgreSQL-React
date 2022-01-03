import React from 'react';
import { Formik, FormikProps } from 'formik';
import * as yup from 'yup';
import { LoginForm } from './LoginForm';
import { CreateUserDto } from '../../../../library/src/users/dto/create-user.dto'

const loginValidationSchema = yup.object().shape({
  login: yup
    .string()
    .min(3)
    .max(254)
    .required("It is requared field"),
  password: yup
    .string()
    .min(6)
    .max(256)
    .required("It is requared field"),
});

export type LoginFormValues = CreateUserDto;

export const initialLoginFormValues: LoginFormValues = {
  email: '',
  password: '',
};

export const LoginFormContainer = () => {
  // const dispatch = useDispatch();

  const handleSubmit = async (values: LoginFormValues) => {
    // dispatch(userLogin(values.login, values.password));
    console.log('pizza')
  };

  return (
    <div
      style={{
        borderRadius: '5px',
        marginTop: '2rem',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          margin: '30px 0',
        }}
      >
        <h4>Library</h4>
      </div>
      <div>
        <div>
          <Formik
            initialValues={initialLoginFormValues}
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={loginValidationSchema}
          >
            {(formikProps: FormikProps<LoginFormValues>) => (
              <LoginForm formikProps={formikProps} />
            )}
          </Formik>
        </div>
        <p>OR</p>
      </div>
      <button
        style={{
          color: 'grey.700',
          marginBottom: '20px',
        }}
      >
        Forgot password?
      </button>
    </div>
  );
};
