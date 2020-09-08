import React, { useState, useEffect, useRef } from "react"
import ContactForm from "./ContactFormik"
import { useSelector, useDispatch } from "react-redux"
import { contactSelected, aboutAway, mainAway, projectsAway, setColor } from "../actions"
import { motion } from "framer-motion"

function Contact(props) {
  const [trianglePos, setTrianglePos] = useState(0)
  const [top, setTop] = useState(80)
  const [dir, setDir] = useState(true)
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
    top === 80 && setDir(false)
    top === 16 && setDir(true)

    contactPosition ? setTop(80) :
      setTimeout(() => {
        dir ? setTop(top + 2) : setTop(top - 2)
      }, 500)

  }, [aboutPosition, contactPosition, projectsPosition, mainPosition, top])


  const pxPerMove = parseInt(window.innerHeight / 100, 10)

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

      <div
        className="rightTriangle"
        ref={triangleRef}
        style={{
          backgroundColor: color,
          transform: `translateY(${top * pxPerMove}px)`,
        }}
      ></div>

    </div >
  )
}

export default Contact
