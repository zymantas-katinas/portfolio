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
    <div className="about">
      <div className="about__triangle">
        <h2 onClick={handleClick}>Who am I?</h2>
        <AnimatePresence>
          {position && (
            <motion.div variants={aboutVariants} initial="hidden" animate="visible" exit="hidden">
              <AboutMe />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default About
