import React, { useState } from "react"
import "./assets/css/main.css"
import Main from "./components/Main"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/Contact"
import Icons from "./components/Icons"
import { useDispatch } from "react-redux"
import { mainSelected, contactAway, aboutAway, projectsAway } from "./actions"
import { motion } from "framer-motion"

function App() {
  const [side, setSide] = useState(0)
  const [up, setUp] = useState(0)

  const matrix = `matrix3d(1, 0, 0, ${side}, 0, 1, 0, ${up}, 0, 0, 1, 0, 0, 0, 0, 1)`
  const dispatch = useDispatch()

  const handleMouseMove = (e) => {
    const posUp = e.pageY - window.innerHeight / 2
    const posSide = e.pageX - window.innerWidth / 2
    setSide(posSide / 150000)
    setUp(posUp / 150000)
  }

  const handleClick = () => {
    dispatch(mainSelected())
    dispatch(aboutAway())
    dispatch(projectsAway())
    dispatch(contactAway())
  }

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <div className="loading-screen"></div>
      <div className="logo" style={{ transform: matrix }} onClick={handleClick}>
        ZK&nbsp;&nbsp;&nbsp;.
      </div>
      <div className="frame"></div>
      <motion.div initial={{ y: window.innerHeight + 200 }} animate={{ y: 150 }} transition={{ duration: 1 }}>
        <div className="leftTriangle"></div>
      </motion.div>
      <motion.div initial={{ y: window.innerHeight + 200 }} animate={{ y: 50 }} transition={{ duration: 2 }}>
        <div className="rightTriangle"></div>
      </motion.div>
      <Main />
      <Projects />
      <About />
      <Contact />
      <Icons />
    </div>
  )
}

export default App
