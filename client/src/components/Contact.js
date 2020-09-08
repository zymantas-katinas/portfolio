import React, { useState, useEffect } from "react"
import ContactForm from "./ContactFormik"
import { useSelector} from "react-redux"
import { motion } from "framer-motion"


const trianglesVariants = {
  hidden: {
    y: "-100vh"
  },
  default: {
    y: 0
  }
}

const rightVariants = {
  hidden: {
    y: window.innerHeight + 200,
    transition: { duration: 1 },
  },
  default: {
    y: window.innerHeight - window.innerHeight / 4 - 100,
    transition: { duration: 1 },
  },
  selected: {
    y: window.innerHeight - window.innerHeight / 4 - 100,
    transition: { duration: 1 },
  },
  // unselected: {
  //   y: [
  //     window.innerHeight - window.innerHeight / 4 - 100,
  //      50,
  //      window.innerHeight - window.innerHeight / 4 - 100,
  //   ],
  //   transition: { duration: 30, loop: Infinity, ease: "easeInOut" },
  // },
}


function Contact(props) {
  const [pos, setPos] = useState(true)
  const trianglesPos = useSelector((state) => state.trianglesPos)
  const contactPosition = useSelector((state) => state.contactPosition)

  useEffect(() => {
    setTimeout(() => {
      setPos(false)
    }, 2000)
  }, [])


  return (
    <div>
      <motion.div
         variants = {trianglesVariants}
        initial="hidden"
        animate={trianglesPos ? "default" : "hidden"}
        transition={
          !props.loading ? {
            delay: 0.2,
            duration: 0.5
          } :
            {
              duration: 0.6,
              delay: 0.8
            }
        }
        className="contact"
      >
        <div className={`contact__triangle`}>
        </div>
      </motion.div>

      <motion.div initial={false} animate={contactPosition ? "open" : "closed"}>
        <ContactForm position={contactPosition} />
      </motion.div>
     <motion.div
        variants={rightVariants}
        initial="hidden"
        animate={contactPosition ? "selected" : `${pos ? "default" : "unselected"}`}
      >
      <div
        className="rightTriangle"
      ></div>
     </motion.div>

    </div >
  )
}

export default Contact
