import React, { useState, useEffect, useRef } from "react"
// import ContactForm from "./ContactForm"
import ContactForm from "./ContactFormik"
import { useSelector, useDispatch } from "react-redux"
import { contactSelected, aboutAway, mainAway, projectsAway, setColor } from "../actions"
import { motion } from "framer-motion"

function Contact(props) {
  const [trianglePos, setTrianglePos] = useState(0)
  const [pos, setPos] = useState(true)
  const [top, setTop] = useState(1)
  const contactPosition = useSelector((state) => state.contactPosition)
  const aboutPosition = useSelector((state) => state.aboutPosition)
  const projectsPosition = useSelector((state) => state.projectsPosition)
  const mainPosition = useSelector((state) => state.mainPosition)

  const color = useSelector((state) => state.colorNumber.triangle)

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
    // setInterval(() => {
    //   dispatch(setColor(triangleRef.current.getBoundingClientRect().top))
    // }, 250)
    setTimeout(() => {
      setPos(false)
    }, 2000)
  }, [])



  useEffect(() => {
    const interval = setInterval(() => {
      setTop(top + 1)
      dispatch(setColor(top))
      console.log(top)
    }, 250)
    !mainPosition && clearInterval(interval)
    return () => clearInterval(interval)
  }, [mainPosition, top])

  useEffect(() => {
    aboutPosition ? dispatch(setColor(triangleRef.current.getBoundingClientRect().top)) :
      projectsPosition ? dispatch(setColor(triangleRef.current.getBoundingClientRect().top)) :
        contactPosition ? dispatch(setColor(triangleRef.current.getBoundingClientRect().top)) :
          dispatch(setColor(triangleRef.current.getBoundingClientRect().top))
  }, [aboutPosition, contactPosition, projectsPosition])

  const variants = {
    hidden: {
      y: window.innerHeight + 200,
      // transition: { duration: 1.5 },
    },
    default: {
      y: 450,
      transition: { duration: 2 },
    },
    selectedContact: {
      y: 550,
      transition: { duration: 0.8, delay: 0.2 },
    },
    selectedProject: {
      y: 50,
      transition: { duration: 0.8, delay: 0.2 },
    },
    selectedAbout: {
      y: 300,
      transition: { duration: 0.8, delay: 0.2 },
    },
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
        <div className={`contact__triangle ${contactPosition && "selectedContact"}`} style={{ backgroundColor: color }}>
          <h2 onClick={handleClick}>Hire Me</h2>
        </div>
      </motion.div>
      <motion.div initial={false} animate={contactPosition ? "open" : "closed"}>
        <ContactForm position={contactPosition} />
      </motion.div>

      <motion.div
        variants={variants}
        initial="hidden"
        animate={
          contactPosition ? "selectedContact" :
            projectsPosition ? 'selectedProject' :
              aboutPosition ? "selectedAbout" :
                `${pos ? "default" : "unselected"}`
        }
      >
        <div
          className="rightTriangle"
          ref={triangleRef}
          style={{ backgroundColor: color }}
        ></div>
      </motion.div>

    </div >
  )
}

export default Contact
