import React, { useState, useEffect, useRef } from "react"
import ContactForm from "./ContactFormik"
import { useSelector, useDispatch } from "react-redux"
import { contactSelected, aboutAway, mainAway, projectsAway } from "../actions"
import { motion } from "framer-motion"

function Contact(props) {
  const [trianglePos, setTrianglePos] = useState(0)
  const [pos, setPos] = useState(true)
  const [windowHeight, setWindowHeight] = useState(0);
  const contactPosition = useSelector((state) => state.contactPosition)

  const triangleRef = useRef()

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(contactSelected())
    dispatch(projectsAway())
    dispatch(mainAway())
    dispatch(aboutAway())
    setTrianglePos(-1)

    setTimeout(() => {
      setTrianglePos(0)
    }, 200)
  }
  useEffect(() => {
    setWindowHeight(window.innerHeight)
    setTimeout(() => {
      setPos(false)
    }, 2000)
  }, [])

  const variants = {
    hidden: {
      y: window.innerHeight + 200,
      transition: { duration: 1 },
    },
    default: {
      y: window.innerHeight - window.innerHeight / 4,
      transition: { duration: 1 },
    },
    selected: {
      y: window.innerHeight - window.innerHeight / 4,
      transition: { duration: 1 },
    },
    unselected: {
      y: [
        window.innerHeight - window.innerHeight / 4,
         50,
         window.innerHeight - window.innerHeight / 4,
      ],
      transition: { duration: 20, loop: Infinity, ease: "easeInOut" },
    },
  }


  // const pxPerMove = windowHeight !== 0 ? parseInt(windowHeight / 100, 10): 5
  return (
    <div>
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: `${trianglePos}vh` }}
        transition={
          !props.loading ? {
            duration: 0.1
          } :
            {
              duration: 0.6,
              delay: 1
            }
        }
        className="contact"
      >
        <div className={`contact__triangle ${contactPosition && "selectedContact"}`}>
          <h2 onClick={handleClick}>Hire Me</h2>
        </div>
      </motion.div>
      <motion.div initial={false} animate={contactPosition ? "open" : "closed"}>
        <ContactForm position={contactPosition} />
      </motion.div>
     <motion.div
        variants={variants}
        initial="hidden"
        animate={contactPosition ? "selected" : `${pos ? "default" : "unselected"}`}
      >
      <div
        className="rightTriangle"
        ref={triangleRef}

      ></div>
     </motion.div>

    </div >
  )
}

export default Contact
