import React, { useState } from "react"
import "./assets/css/main.css"
import Main from "./components/Main"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/Contact"
import Icons from "./components/Icons"
// import { useDispatch, useSelector } from "react-redux"
// import { projectsDefault, contactThird, aboutSecond, mainOnTop } from "./actions"

function App() {
  const [side, setSide] = useState(0)
  const [up, setUp] = useState(0)

  const matrix = `matrix3d(1, 0, 0, ${side}, 0, 1, 0, ${up}, 0, 0, 1, 0, 0, 0, 0, 1)`
  // const dispatch = useDispatch()
  // const mainPosition = useSelector((state) => state.mainPosition)
  // const contactPosition = useSelector((state) => state.contactPosition)
  // const projectsPosition = useSelector((state) => state.projectsPosition)

  const handleMouseMove = (e) => {
    const posUp = e.pageY - window.innerHeight / 2
    const posSide = e.pageX - window.innerWidth / 2
    setSide(posSide / 150000)
    setUp(posUp / 150000)
  }

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <div className="loading-screen"></div>
      <div className="logo" style={{ transform: matrix }}>
        ZK&nbsp;&nbsp;&nbsp;.
      </div>
      <div className="frame"></div>
      <div className="leftTriangle"></div>
      <div className="rightTriangle"></div>
      <Main />
      <Projects />
      <About />
      <Contact />
      <Icons />
    </div>
  )
}

export default App
