// Render Prop
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from '../RegistrationForm/RegistrationForm.module.css';

const RegistrationForm = () => (
  <div className={css.regFormContainer}>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={css.regForm}>
            <Field className={css.regInput} type="email" name="email" hidentext='Enter your email'/>
                <ErrorMessage name="email" component="div" />
            <Field className={css.regInput} type="password" name="password" />
                <ErrorMessage name="password" component="div" />
            <button className={css.regButton} type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default RegistrationForm;