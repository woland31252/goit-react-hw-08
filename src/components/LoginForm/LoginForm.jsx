// Render Prop
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from '../LoginForm/LoginForm.module.css';

const LoginForm = () => (
  <div className={css.logInFormContainer}>
    {/* <h1>Any place in your app!</h1> */}
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
        <Form className={css.logInForm}>
            <Field className={css.logInInput} type="email" name="email" placeholder='Enter your email'/>
                <ErrorMessage className={css.logInMessage} name="email" component="div" />
            <Field className={css.logInInput} type="password" name="password" placeholder='Enter your password'/>
                <ErrorMessage className={css.logInMessage} name="password" component="div" />
            <button className={css.logInButton} type="submit" disabled={isSubmitting}>
            Log In
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginForm;