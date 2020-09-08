import React, { useState } from "react"
import Project from "./Project"
import { useSelector, useDispatch } from "react-redux"
import { projectsSelected, contactAway, mainAway, aboutAway } from "../../actions"
import { motion } from "framer-motion"

const trianglesVariants = {
  hidden: {
    y: "-100vh"
  },
  default: {
    y: 0
  }
}

function Projects(props) {
  const trianglesPos = useSelector((state) => state.trianglesPos)

  return (
    <div>
      <Project />
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
               delay: 1.4
             }
         }
        className="projects"
      >
        <div className={`projects__triangle`} />
      </motion.div>
    </div>
  )
}

export default Projects
