import React from "react"
import AboutMe from "./AboutMe"
import { useSelector, useDispatch } from "react-redux"
import { aboutSelected, contactAway, mainAway, projectsAway } from "../../actions"
import { AnimatePresence, motion } from "framer-motion"
import { aboutVariants } from "../../variants"

function About() {
  const position = useSelector((state) => state.aboutPosition)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(aboutSelected())
    dispatch(projectsAway())
    dispatch(mainAway())
    dispatch(contactAway())
  }

  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="about"
    >
      <div className={`about__triangle ${position && "selected"}`}>
        <h2 onClick={handleClick}>Who am I?</h2>
        <motion.div initial={false} animate={position ? "open" : "closed"}>
          <AboutMe />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
