import React from "react"
import ContactForm from "./ContactFormik"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"

const trianglesVariants = {
  hidden: {
    y: "-100vh",
  },
  default: {
    y: 0,
  },
}

const rightVariants = {
  hidden: {
    y: window.innerHeight + 200,
    transition: { delay: 0, duration: 1 },
  },
  default: {
    y: window.innerHeight - window.innerHeight / 3,
    transition: { ease: "easeInOut", delay: 0.6, duration: 1 },
  },
  selected: {
    y: 60,
    transition: { ease: "easeInOut", duration: 1 },
  },
  unselected: {
    y: window.innerHeight - window.innerHeight / 2,
    transition: { ease: "easeInOut", duration: 1 },
  },
}

function Contact(props) {
  const trianglesPos = useSelector((state) => state.trianglesPos)
  const contactPosition = useSelector((state) => state.contactPosition)
  const aboutPosition = useSelector((state) => state.aboutPosition)
  const projectsPosition = useSelector((state) => state.projectsPosition)

  return (
    <div>
      <motion.div
        variants={trianglesVariants}
        initial="hidden"
        animate={trianglesPos ? "default" : "hidden"}
        transition={
          !props.loading
            ? {
                delay: 0.2,
                duration: 0.5,
              }
            : {
                duration: 0.6,
                delay: 0.8,
              }
        }
        className="contact"
      >
        <div className={`contact__triangle`}></div>
      </motion.div>

      <motion.div initial={false} animate={contactPosition ? "open" : "closed"}>
        <ContactForm position={contactPosition} />
      </motion.div>
      <motion.div
        variants={rightVariants}
        initial="hidden"
        animate={contactPosition ? "selected" : aboutPosition ? "unselected" : projectsPosition ? "hidden" : "default"}
      >
        <div className="rightTriangle"></div>
      </motion.div>
    </div>
  )
}

export default Contact
