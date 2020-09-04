import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { motion } from "framer-motion"

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
}

const childVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
}
const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    message: Yup.string()
        // .min(2, 'Too Short!')
        // .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});
const ContactForm = (props) => {
    const [disable, setDisabled] = useState(true)
    const pointerEvents = props.position ? { pointerEvents: "all" } : { pointerEvents: "none" }

    return (
        <motion.div className="contact__form" style={pointerEvents} variants={variants}>
            <motion.p className="contact__info-top" variants={childVariants}>
                Fill out your details, and I will get back to you shortly:
           </motion.p>
            <Formik
                initialValues={{
                    firstName: '',
                    message: '',
                    email: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched, isValid, dirty }) => (
                    <Form onChange={() => console.log(errors)}>
                        <motion.div variants={childVariants} >
                            <Field name="firstName" className="contact__input" placeholder="name" />
                            {errors.firstName && touched.firstName ? (
                                <div className="contact__error"><p>{errors.firstName}</p></div>
                            ) : null}
                        </motion.div>
                        <motion.div variants={childVariants} >
                            <Field name="email" type="email" className="contact__input" placeholder="email" />
                            {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        </motion.div>
                        <motion.div variants={childVariants} >
                            <Field component="textarea" row="6" name="message" className="contact__input" placeholder="message" />
                            {errors.message && touched.message ? (
                                <div>{errors.message}</div>
                            ) : null}
                        </motion.div>
                        <motion.button
                            className="button-medium"
                            type="submit"
                            disabled={!isValid && !dirty}
                            variants={childVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Submit
                            </motion.button>
                    </Form>
                )}
            </Formik>
        </motion.div>
    );
}
export default ContactForm
