import React, { useState } from "react"
import Project from "./Project"
import { useSelector, useDispatch } from "react-redux"
import { projectsSelected, contactAway, mainAway, aboutAway } from "../../actions"
import { motion } from "framer-motion"

function Projects() {
  const position = useSelector((state) => state.projectsPosition)
  const [trianglePos, setTrianglePos] = useState(0)
  const dispatch = useDispatch()
  const color = useSelector((state) => state.colorNumber)

  const handleClick = () => {
    dispatch(projectsSelected())
    dispatch(aboutAway())
    dispatch(mainAway())
    dispatch(contactAway())
    setTrianglePos(-3)
    setTimeout(() => {
      setTrianglePos(0)
    }, 200)
  }

  return (
    <div>
      <Project />
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: `${trianglePos}vh` }}
        // transition={{ duration: 0.6, delay: 0.4 }}
        transition={{ duration: 1 }}
        className="projects"
      >
        <div className={`projects__triangle ${position && "selected"}`} style={{ backgroundColor: color }}>
          <h2 onClick={handleClick}>Projects</h2>
        </div>
      </motion.div>
    </div>
  )
}

export default Projects
