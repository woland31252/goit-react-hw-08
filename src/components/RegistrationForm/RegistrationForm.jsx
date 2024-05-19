// Render Prop
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { useId } from "react";
import clsx from 'clsx';
import { register } from '../../redux/auth/operations';
import css from '../RegistrationForm/RegistrationForm.module.css';

const RegistrationForm = () => {
  const nameId = useId();
  const emailId = useId();
  const passwId = useId();

  const dispatch = useDispatch();
  const initialValue = {
    name: "",
    email: "",
    password: "",
  }

  const registerSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    password: Yup.string().min(5, "Too Short!").max(50, "Too Long!").required("Required"),
});

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  }
  return (
   <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={registerSchema}
    >
      <Form className={css.regForm}>
        <label className={clsx(css.formRegLable, css.formRegName)} htmlFor={nameId}>Name</label>
        <Field className={css.regInput} type="name" name="name" id={nameId} placeholder='Enter your name'/>
        <ErrorMessage className={clsx(css.regMessage, css.regErrorName)} name="name" component="span" />
        <label className={clsx(css.formRegLable, css.formRegEmail)} htmlFor={emailId}>Email</label>
            <Field className={css.regInput} type="email" name="email" id={emailId} placeholder='Enter your email'/>
        <ErrorMessage className={clsx(css.regMessage, css.regErrorEmail)} name="email" component="span" />
        <label className={clsx(css.formRegLable, css.formRegPassw)} htmlFor={passwId}>Password</label>
        <Field className={css.regInput} type="password" name="password" id={ passwId} placeholder='Enter your password'/>
                <ErrorMessage className={clsx(css.regMessage, css.regErrorPassw)} name="password" component="span" />
            <button className={css.regButton} type="submit">
            Register
          </button>
        </Form>
    </Formik>
)
   
  }
  

export default RegistrationForm;