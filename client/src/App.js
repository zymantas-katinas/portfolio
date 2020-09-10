import React, { useState, useEffect } from "react"
import "./assets/css/main.css"
import Main from "./components/Main"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/Contact"
import Icons from "./components/Icons"
import Navbar from "./components/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { mainSelected, contactAway, aboutAway, projectsAway, setTrianglesBack } from "./actions"
import { motion } from "framer-motion"
import classnames from "classnames"

const leftVariants = {
  hidden: {
    y: window.innerHeight + 200,
    transition: { delay: 0, duration: 1 },
  },
  default: {
    y: 100,
    transition: { ease: "easeInOut", delay: 0.6, duration: 1.4 },
  },
  selected: {
    y: window.innerHeight - window.innerHeight / 5 + 10,
    transition: { ease: "easeInOut", duration: 1 },
  },
  unselected: {
    y: window.innerHeight / 2,
    transition: { ease: "easeInOut", duration: 1 },
  },
}

function App() {
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()
  const projectsPosition = useSelector((state) => state.projectsPosition)
  const contactPosition = useSelector((state) => state.contactPosition)
  const aboutPosition = useSelector((state) => state.aboutPosition)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const handleClick = () => {
    dispatch(mainSelected())
    dispatch(aboutAway())
    dispatch(projectsAway())
    dispatch(contactAway())
    dispatch(setTrianglesBack())
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }

  const loadingClass = classnames("loading-screen", !loading && "loading-screen-off")

  return (
    <div className="App">
      <div className={loadingClass}></div>
      {!projectsPosition && (
        <div className="logo" onClick={handleClick}>
          ZK&nbsp;&nbsp;&nbsp;.
        </div>
      )}
      <div className="frame"></div>
      <motion.div
        variants={leftVariants}
        initial="hidden"
        // animate={mainPosition ? "selected" : "unselected"}
        animate={contactPosition ? "selected" : aboutPosition ? "unselected" : projectsPosition ? "hidden" : "default"}
      >
        <div className="leftTriangle"></div>
      </motion.div>
      <Navbar />
      <Main loading={loading} />
      <Projects loading={loading} />
      <About loading={loading} />
      <Contact loading={loading} />
      <Icons />
    </div>
  )
}

export default App
