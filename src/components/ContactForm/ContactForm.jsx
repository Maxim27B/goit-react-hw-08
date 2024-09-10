import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const ContactForm = () => {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  const dispatch = useDispatch();
  const onAddContact = values => {
    dispatch(addContact(values));
  };

  const nameId = nanoid();
  const numberId = nanoid();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name is too short')
      .max(50, 'Name is too long')
      .required('Name is required'),
    number: Yup.string()
      .required('Number is required')
      .min(3, 'Number is too short')
      .max(50, 'Number is too long'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
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
          <label htmlFor={numberId}>Number</label>
          <Field type="text" name="number" id={numberId}></Field>
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="span"
          />
        </div>
        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
