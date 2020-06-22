import React from "react"
import Project from "./Project"
import { useSelector, useDispatch } from "react-redux"
import { projectsSelected, contactAway, mainAway, aboutAway } from "../../actions"
import { AnimatePresence, motion } from "framer-motion"
import { projectsVariants } from "../../variants"

function Projects() {
  const position = useSelector((state) => state.projectsPosition)

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(projectsSelected())
    dispatch(aboutAway())
    dispatch(mainAway())
    dispatch(contactAway())
  }

  return (
    <div>
      <AnimatePresence>
        {position && (
          <motion.div variants={projectsVariants} initial="hidden" animate="visible" exit="hidden">
            <Project />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div initial={{ y: "-100vh" }} animate={{ y: 0 }} transition={{ duration: 1 }} className="projects">
        <div className="projects__triangle">
          <h2 onClick={handleClick}>Projects</h2>
        </div>
      </motion.div>
    </div>
  )
}

export default Projects
