import React, { useState, useEffect, useRef } from "react"
// import ContactForm from "./ContactForm"
import ContactForm from "./ContactFormik"
import { useSelector, useDispatch } from "react-redux"
import { contactSelected, aboutAway, mainAway, projectsAway, setColor } from "../actions"
import { motion } from "framer-motion"
import Draggable, { DraggableCore } from 'react-draggable'

function Contact() {
  const [trianglePos, setTrianglePos] = useState(0)
  const [pos, setPos] = useState(true)
  const position = useSelector((state) => state.contactPosition)
  const [triangleTop, setTriangleTop] = useState(0)
  const color = useSelector((state) => state.colorNumber)

  const triangleRef = useRef()

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(contactSelected())
    dispatch(projectsAway())
    dispatch(mainAway())
    dispatch(aboutAway())
    setTrianglePos(-3)

    setTimeout(() => {
      setTrianglePos(0)
    }, 200)
  }

  useEffect(() => {
    setInterval(() => {
      dispatch(setColor(triangleRef.current.getBoundingClientRect().top))
    }, 100)
    setTimeout(() => {
      setPos(false)
    }, 2000)
  }, [])

  // const setTop = () => {
  //   setTriangleTop(triangleRef.current.getBoundingClientRect().top)
  // }

  const variants = {
    hidden: {
      y: window.innerHeight + 200,
      transition: { duration: 2 },
    },
    default: {
      y: 450,
      transition: { duration: 2 },
    },
    selected: {
      y: 450,
      transition: { duration: 2 },
    },
    // unselected: {
    //   y: 450,
    //   transition: { duration: 2 },
    // }
    unselected: {
      y: [450, 50, 450],
      transition: { duration: 30, loop: Infinity, ease: "easeInOut" },
    },
  }

  return (
    <div>
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: `${trianglePos}vh` }}
        transition={{ duration: 0.6 }}
        className="contact"
      >
        <div className={`contact__triangle ${position && "selected"}`} style={{ backgroundColor: color }}>
          <h2 onClick={handleClick}>Hire Me</h2>
        </div>
      </motion.div>
      <motion.div initial={false} animate={position ? "open" : "closed"}>
        <ContactForm position={position} />
      </motion.div>

      <motion.div
        variants={variants}
        initial="hidden"
        animate={position ? "selected" : `${pos ? "default" : "unselected"}`}

      >
        <Draggable
          axis="y"
          // onDrag={() => setTop()}
          // bounds={{ top: 300, bottom: 100 }}
          bounds="parent"
        >
          <div
            className="rightTriangle"
            ref={triangleRef}
            style={{ backgroundColor: color }}
          ></div>
        </Draggable>
      </motion.div>

    </div >
  )
}

export default Contact
