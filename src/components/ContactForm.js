import React, { useState, useEffect, useRef } from "react"
import { ReactComponent as AlertIcon } from "../assets/images/alert.svg"
import { motion } from "framer-motion"

const ContactForm = (props) => {
  const firstNameRender = useRef(true)
  const firstEmailRender = useRef(true)
  const [disable, setDisabled] = useState(true)
  const [nameError, setNameError] = useState(null)
  const [nameInput, setNameInput] = useState("")
  const [nameValid, setNameValid] = useState(false)
  const [emailError, setEmailError] = useState(null)
  const [emailInput, setEmailInput] = useState("")
  const [emailValid, setEmailValid] = useState(false)
  const [messageInput, setMessageInput] = useState("")

  // name validation
  useEffect(() => {
    if (firstNameRender.current) {
      firstNameRender.current = false
      return
    }
    if (nameInput.length === 0) {
      setNameError("Name field cannot be empty")
      setNameValid(false)
    } else {
      setNameError(null)
      setNameValid(true)
    }
  }, [nameInput])

  // email validation
  useEffect(() => {
    if (firstEmailRender.current) {
      firstEmailRender.current = false
      return
    }
    if (emailInput.length === 0) {
      setEmailValid(false)
      setEmailError("Email address cannot be empty")
    } else if (!emailInput.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setEmailValid(false)
      setEmailError("Email address must be valid")
    } else {
      setEmailError(null)
      setEmailValid(true)
    }
  }, [emailInput])

  // form validation
  useEffect(() => {
    const formValidation = () => {
      if (nameValid && emailValid) {
        return false
      } else {
        return true
      }
    }
    setDisabled(formValidation())
  }, [nameValid, emailValid])

  const handleSave = () => {
    // submit
  }

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
  const pointerEvents = props.position ? { pointerEvents: "all" } : { pointerEvents: "none" }
  return (
    <motion.div className="contact__form" variants={variants} style={pointerEvents}>
      <form onSubmit={handleSave}>
        <motion.p className="contact__info-top" variants={childVariants}>
          Fill out your details, and I will get back to you shortly:
        </motion.p>

        <motion.div className="contact__input" variants={childVariants} whileHover={{ scale: 1.03 }}>
          <input
            type="text"
            name="nameInput"
            value={nameInput}
            placeholder="Name"
            onChange={(e) => setNameInput(e.target.value)}
            style={nameError !== null ? { border: "2px solid rgb(185, 55, 71)" } : null}
          />
          {nameError && (
            <div className="contact__error">
              <AlertIcon />
              <p>{nameError}</p>
            </div>
          )}
        </motion.div>

        <motion.div className="contact__input" variants={childVariants} whileHover={{ scale: 1.03 }}>
          <input
            type="text"
            name="emailInput"
            placeholder="Email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            style={emailError !== null ? { border: "2px solid rgb(185, 55, 71)" } : null}
          />
          {emailError && (
            <div className="contact__error">
              <AlertIcon />
              <p>{emailError}</p>
            </div>
          )}
        </motion.div>

        <motion.textarea
          variants={childVariants}
          name="message"
          placeholder="Your Message"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          whileHover={{ scale: 1.03 }}
        ></motion.textarea>

        {/* <p className="contact__info-bottom">If you are having trouble</p> */}
        <motion.button
          className="button-medium"
          type="submit"
          disabled={disable}
          variants={childVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  )
}

export default ContactForm
