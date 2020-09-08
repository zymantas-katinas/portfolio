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
    transition: { duration: 1 },
  },
  default: {
    y: 100,
    transition: { duration: 1 },
  },
  selected: {
    y: 100,
    transition: { duration: 1 },
  },
  // unselected: {
  //   y: [
  //     100,
  //   200,
  //      100,
  //   ],
  //   transition: { duration: 30, loop: Infinity, ease: "easeInOut" },
  // },
}

function App() {
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()
  const projectsPosition = useSelector((state) => state.projectsPosition)
  const mainPosition = useSelector((state) => state.mainPosition)


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

  const loadingClass = classnames(
    'loading-screen',
    !loading && 'loading-screen-off'
  )

  return (
    <div
      className="App"
    >
      <div className={loadingClass}></div>
      {!projectsPosition && <div className="logo" onClick={handleClick}>
        ZK&nbsp;&nbsp;&nbsp;.
      </div>}
      <div className="frame"></div>
      <motion.div       
        variants={leftVariants}
        initial="hidden"
        animate={mainPosition ? "selected" : "unselected"}
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
