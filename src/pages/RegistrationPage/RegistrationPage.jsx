import css from './RegistrationPage.module.css';
import * as Yup from 'yup';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { selectAuthError } from '../../redux/auth/selectors';

const RegistrationPage = () => {
  const isError = useSelector(selectAuthError);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  const nameId = nanoid();
  const emailId = nanoid();
  const passwordId = nanoid();

  const RegisterValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Name is required'),
    email: Yup.string()
      .email('Email must be valid ')
      .required('Email is required')
      .min(3, 'Too Short!')
      .max(50, 'Too Long!'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password is too short')
      .max(50, 'Password is too long'),
  });

  return (
    <div className={css.pageContainer}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={RegisterValidationSchema}
      >
        <Form className={css.form}>
          <div className={css.inputContainer}>
            <label htmlFor={nameId}>Name</label>
            <Field type="text" name="name" id={nameId}></Field>
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="span"
            />
          </div>
          <div className={css.inputContainer}>
            <label htmlFor={emailId}>Email</label>
            <Field type="text" name="email" id={emailId}></Field>
            <ErrorMessage
              className={css.errorMessage}
              name="email"
              component="span"
            />
          </div>
          <div className={css.inputContainer}>
            <label htmlFor={passwordId}>Password</label>
            <Field type="password" name="password" id={passwordId}></Field>
            <ErrorMessage
              className={css.errorMessage}
              name="password"
              component="span"
            />
          </div>
          <button type="submit" className={css.formBtn}>
            Sign up
          </button>
          {isError && (
            <p className={css.errorMessage}>
              The user with this email is already registred
            </p>
          )}
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
