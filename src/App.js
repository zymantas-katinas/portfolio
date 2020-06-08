import React, { useState, useEffect } from "react"
import "./assets/css/main.css"
import Main from "./components/Main"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/Contact"
import Icons from "./components/Icons"

function App() {
  const [side, setSide] = useState(0)
  const [up, setUp] = useState(0)
  const matrix = `matrix3d(1, 0, 0, ${side}, 0, 1, 0, ${up}, 0, 0, 1, 0, 0, 0, 0, 1)`

  const handleMouseMove = (e) => {
    const posUp = e.pageY - window.innerHeight / 2
    const posSide = e.pageX - window.innerWidth / 2
    setSide(posSide / 150000)
    setUp(posUp / 150000)
  }

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <div className="logo" style={{ transform: matrix }}>
        ZK&nbsp;.
      </div>
      <Main />
      <Projects />
      <About />
      <Contact />
      <Icons />
    </div>
  )
}

export default App
