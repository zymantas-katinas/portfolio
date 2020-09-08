import React, { useState, useEffect, useRef } from "react"
import ContactForm from "./ContactFormik"
import { useSelector, useDispatch } from "react-redux"
import { contactSelected, aboutAway, mainAway, projectsAway } from "../actions"
import { motion } from "framer-motion"

function Contact(props) {
  const [trianglePos, setTrianglePos] = useState(0)
  const [top, setTop] = useState(80)
  const [dir, setDir] = useState(true)
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
  }, [])
  // useEffect(() => {
  //   top === 80 && setDir(false)
  //   top === 16 && setDir(true)

  //   contactPosition ? setTop(80) :
  //     setTimeout(() => {
  //       dir ? setTop(top + 4) : setTop(top - 4)
  //       console.log(top)
  //     }, 1000)

  // }, [contactPosition, dir, top])


  const pxPerMove = windowHeight !== 0 ? parseInt(windowHeight / 100, 10): 5
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

      <div
        className="rightTriangle"
        ref={triangleRef}
        style={{
          transform: `translateY(${top * pxPerMove}px)`,
        }}
      ></div>

    </div >
  )
}

export default Contact
