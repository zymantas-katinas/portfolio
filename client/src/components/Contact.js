import React, { useState, useEffect, useRef } from "react"
// import ContactForm from "./ContactForm"
import ContactForm from "./ContactFormik"
import { useSelector, useDispatch } from "react-redux"
import { contactSelected, aboutAway, mainAway, projectsAway, setColor } from "../actions"
import { motion } from "framer-motion"

function Contact() {
  const [trianglePos, setTrianglePos] = useState(0)
  const [pos, setPos] = useState(true)
  const position = useSelector((state) => state.contactPosition)
  const colorNumber = useSelector((state) => state.colorNumber)
  // const colorNum = useS
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

      // console.log(triangleRef.current.getBoundingClientRect().top)
    }, 100)
    setTimeout(() => {
      setPos(false)
    }, 2000)
  }, [])

  const variants = {
    hidden: {
      y: window.innerHeight + 200,
      transition: { duration: 2 },
    },
    default: {
      y: 250,
      transition: { duration: 2 },
    },
    selected: {
      y: 250,
      transition: { duration: 2 },
    },
    unselected: {
      y: [250, 50, 250],
      transition: { duration: 10, loop: Infinity, ease: "easeInOut" },
    },
  }

  const color = `rgb(${colorNumber}, 64, 0)`

  return (
    <div>
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: `${trianglePos}vh` }}
        transition={{ duration: 0.6 }}
        className="contact"
      >
        <div className={`contact__triangle ${position && "selected"}`}>
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
        <div
          className="rightTriangle"
          ref={triangleRef}
        // style={{ backgroundColor: color }}
        ></div>
      </motion.div>
    </div>
  )
}

export default Contact
