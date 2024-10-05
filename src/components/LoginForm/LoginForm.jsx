import { Formik, Form, Field, ErrorMessage,  } from "formik";
import { useId } from "react";
import css from './LoginForm.module.css'
import * as Yup from "yup";



export const LoginForm = () => {

    const LoginId = useId();
    const passwordId = useId();
    
    const initialValues = {
        login: "",
        password: "",
    }

    const LoginSchema = Yup.object().shape(
        {login: Yup.string().min(5, "Too short").max(15, "Too long").required("Required"),
        password: Yup.string().min(5, "Too short").max(15, "Too long").required("Required"),
    }
    )


    const handleSubmit = (values, actions) => {
        actions.resetForm();
    }

    return (
<Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={LoginSchema}>
    <Form className={css.contact_form}>
        <label htmlFor={LoginId}>Login:</label>
        <Field type="text" name="login" id={LoginId}/>
        <ErrorMessage name="login" render={msg => <span className={css.error}>{msg}</span>} />
        <label htmlFor={passwordId}>Password:</label>
        <Field type="password" name="password" id={passwordId}/>
        <ErrorMessage name="password" render={msg => <span className={css.error}>{msg}</span>} />
        <button type="submit">Log In</button>
    </Form>
</Formik>
    )
}