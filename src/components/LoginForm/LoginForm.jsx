
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { useId } from "react";
import clsx from 'clsx';
import { logIn } from '../../redux/auth/operations';
import css from '../LoginForm/LoginForm.module.css';

const LoginForm = () => {
  const emailId = useId();
  const passwId = useId();

  const dispatch = useDispatch();
  const initialValue = {
    email: "",
    password: "",
  }

  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(5, "Too Short!").max(50, "Too Long!").required("Required"),
});

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  }
  return (
   <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      <Form className={css.logInForm}>
        <label className={clsx(css.logInLable, css.logInEmail)} htmlFor={emailId}>Email</label>
        <Field className={css.logInInput} type="email" name="email" id={emailId} placeholder='Enter your email'/>
        <ErrorMessage className={clsx(css.logInMessage, css.logInErrorEmail)} name="email" component="span" />
        <label className={clsx(css.logInLable, css.logInPassw)} htmlFor={passwId}>Password</label>
        <Field className={css.logInInput} type="password" name="password" id={ passwId} placeholder='Enter your password'/>
        <ErrorMessage className={clsx(css.logInMessage, css.logInErrorPassw)} name="password" component="span" />
        <button className={css.logInButton} type="submit">Log In</button>
        </Form>
    </Formik>
)
   
  }
  
export default LoginForm;