import React, { useState } from "react"
import AboutMe from "./AboutMe"
import { useSelector, useDispatch } from "react-redux"
import { aboutSelected, contactAway, mainAway, projectsAway } from "../../actions"
import { motion } from "framer-motion"

function About(props) {
  const position = useSelector((state) => state.aboutPosition)
  const dispatch = useDispatch()
  const [trianglePos, setTrianglePos] = useState(0)

  const handleClick = () => {
    dispatch(aboutSelected())
    dispatch(projectsAway())
    dispatch(mainAway())
    dispatch(contactAway())
    setTrianglePos(-1)
    setTimeout(() => {
      setTrianglePos(0)
    }, 200)
  }

  return (
    <>
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: `${trianglePos}vh` }}
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
        <div className={`about__triangle ${position && "selected"}`} >
          <h2 onClick={handleClick}>Who am I?</h2>
        </div>
      </motion.div>
      <motion.div initial={false} animate={position ? "open" : "closed"}>
        <AboutMe />
      </motion.div>
    </>
  )
}

export default About
