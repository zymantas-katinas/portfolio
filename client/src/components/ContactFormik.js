import React, { useState } from "react"
import * as emailjs from "emailjs-com"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { motion } from "framer-motion"
import { FaTimes } from "react-icons/fa"
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}
const sentVariants = {
  open: {
    y: "-50%",
    x: "-50%",
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: "-40%",
    x: "-50%",
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
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
  name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  message: Yup.string()
    // .min(2, 'Too Short!')
    // .max(50, 'Too Long!')
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
})

const ContactForm = (props) => {
  const pointerEvents = props.position ? { pointerEvents: "all" } : { pointerEvents: "none" }
  const [emailSent, setEmailSent] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <>
      <motion.div
        className="contact__form-sent"
        // initial={false}
        variants={sentVariants}
        animate={props.position && (emailSent ? "open" : "closed")}
      >
        <span>Thank you for contacting me! </span>
        <span>I will respond to you as soon as I can.</span>
        <div onClick={() => setEmailSent(false)}>
          <FaTimes />
        </div>
      </motion.div>
      <motion.div
        className="contact__form"
        style={pointerEvents}
        variants={variants}
        animate={props.position && (emailSent ? "closed" : "open")}
      >
        {loading && (
          <div className="contact__form-spinner">
            <Loader type="Triangle" color="#ffffffdb" height={120} width={120} />
          </div>
        )}
        <motion.p className="contact__info-top" variants={childVariants}>
          <span>Fill</span> out your <span>details</span>, and I will get back to you shortly:
        </motion.p>
        <Formik
          initialValues={{
            name: "",
            message: "",
            email: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, actions) => {
            actions.setSubmitting(true)
            setLoading(true)
            setTimeout(() => {
              emailjs
                .send(
                  "service_t3jfx7x", //Email service as defined in EmailJS setting
                  "template_pv3pr0f", // Email template ID provided by EmailJS
                  {
                    from_name: values.name,
                    reply_to: values.email,
                    message: values.message,
                  },
                  "user_lI9a0nFaJvtrKaQ5Yd7I5" // EmailJS user ID
                )
                .then(() => {
                  setLoading(false)
                  setEmailSent(true)
                  actions.setSubmitting(false)
                  actions.resetForm()
                })
                .catch(() => {
                  actions.setSubmitting(false)
                  alert("Error sending email...")
                  setEmailSent(false)
                })
            }, 1000)
          }}
        >
          {({ errors, touched, isValid, dirty }) => (
            <Form>
              <motion.div variants={childVariants}>
                <Field name="name" className="contact__input" placeholder="Name" />
                {errors.name && touched.name ? (
                  <div className="contact__error">
                    <p>{errors.name}</p>
                  </div>
                ) : null}
              </motion.div>
              <motion.div variants={childVariants}>
                <Field name="email" type="email" className="contact__input" placeholder="Email" />
                {errors.email && touched.email ? (
                  <div className="contact__error">
                    <p>{errors.email}</p>
                  </div>
                ) : null}
              </motion.div>
              <motion.div variants={childVariants}>
                <Field
                  component="textarea"
                  row="6"
                  name="message"
                  className="contact__input"
                  placeholder="Tell me something"
                />
                {errors.message && touched.message ? (
                  <div className="contact__error">
                    <p>{errors.message}</p>
                  </div>
                ) : null}
              </motion.div>
              <motion.div variants={childVariants}>
                <button className="button-medium" type="submit" disabled={!(isValid && dirty)}>
                  Submit
                </button>
              </motion.div>
            </Form>
          )}
        </Formik>
      </motion.div>
    </>
  )
}
export default ContactForm
