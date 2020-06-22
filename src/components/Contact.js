import React from "react"
import ContactForm from "./ContactForm"
import { useSelector, useDispatch } from "react-redux"
import { contactSelected, aboutAway, mainAway, projectsAway } from "../actions"
import { AnimatePresence, motion } from "framer-motion"
import { contactVariants } from "../variants"

function Contact() {
  const position = useSelector((state) => state.contactPosition)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(contactSelected())
    dispatch(projectsAway())
    dispatch(mainAway())
    dispatch(aboutAway())
  }

  return (
    <div>
      <div className="contact">
        <div className="contact__triangle">
          <h2 onClick={handleClick}>Hire Me</h2>
        </div>
      </div>
      <AnimatePresence>
        {position && (
          <motion.div variants={contactVariants} initial="hidden" animate="visible" exit="hidden">
            {" "}
            <ContactForm />{" "}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Contact
