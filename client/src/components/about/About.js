import React, { useState } from "react"
import AboutMe from "./AboutMe"
import { useSelector, useDispatch } from "react-redux"
import { aboutSelected, contactAway, mainAway, projectsAway } from "../../actions"
import { motion } from "framer-motion"


const trianglesVariants = {
  hidden: {
    y: "-100vh"
  },
  default: {
    y: 0
  }
}


function About(props) {
  const position = useSelector((state) => state.aboutPosition)
  const trianglesPos = useSelector((state) => state.trianglesPos)

  return (
    <>
      <motion.div
         variants = {trianglesVariants}
         initial="hidden"
         animate={trianglesPos ? "default" : "hidden"}
        transition={
          !props.loading ? {
            duration: 0.1
          } :
            {
              duration: 0.6,
              delay: 1.2
            }
        }
        className="about"
      >
        <div className={`about__triangle`} />
      </motion.div>
      <motion.div initial={false} animate={position ? "open" : "closed"}>
        <AboutMe />
      </motion.div>
    </>
  )
}

export default About
