import React, { useState, useEffect } from "react"
import "./assets/css/main.css"
import Main from "./components/Main"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/Contact"
import Icons from "./components/Icons"
import { useDispatch, useSelector } from "react-redux"
import { projectsDefault, contactThird, aboutSecond, mainOnTop } from "./actions"

function App() {
  const [side, setSide] = useState(0)
  const [up, setUp] = useState(0)
  const [ifShowLoadingScreen, setIfShowLoadingScreen] = useState(true)
  const [ifShowRightTriangle, setIfShowRightTriangle] = useState(false)
  const [ifShowLeftTriangle, setIfShowLeftTriangle] = useState(false)

  const matrix = `matrix3d(1, 0, 0, ${side}, 0, 1, 0, ${up}, 0, 0, 1, 0, 0, 0, 0, 1)`
  const dispatch = useDispatch()
  const mainPosition = useSelector((state) => state.mainPosition)
  const contactPosition = useSelector((state) => state.contactPosition)
  const projectsPosition = useSelector((state) => state.projectsPosition)

  const handleMouseMove = (e) => {
    const posUp = e.pageY - window.innerHeight / 2
    const posSide = e.pageX - window.innerWidth / 2
    setSide(posSide / 150000)
    setUp(posUp / 150000)
  }

  const handleClick = () => {
    if (mainPosition === "mainAway") {
      dispatch(mainOnTop())
      dispatch(aboutSecond())
      dispatch(contactThird())
      dispatch(projectsDefault())
      if (ifShowLoadingScreen === false) {
        setIfShowLoadingScreen(true)
        setTimeout(() => {
          setIfShowLoadingScreen(false)
        }, 200)
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIfShowLoadingScreen(false)
    }, 100)
    setTimeout(() => {
      setIfShowRightTriangle(true)
    }, 1200)
    setTimeout(() => {
      dispatch(contactThird())
    }, 1450)
    setTimeout(() => {
      dispatch(aboutSecond())
    }, 1520)
    setTimeout(() => {
      dispatch(projectsDefault())
    }, 1590)
    setTimeout(() => {
      dispatch(mainOnTop())
    }, 1660)
    setTimeout(() => {
      setIfShowLeftTriangle(true)
    }, 1730)
  }, [])

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <div className={`loading-screen ${!ifShowLoadingScreen ? "invisible" : null}`}></div>
      <div className="logo" style={{ transform: matrix }} onClick={handleClick}>
        ZK&nbsp;&nbsp;&nbsp;.
      </div>
      <div className="frame"></div>
      <div className={`leftTriangle ${ifShowLeftTriangle ? "leftTriangleBottom" : null}`}></div>
      <div className={`rightTriangle ${ifShowRightTriangle ? "rightTriangleBottom" : null}`}></div>
      <Main />
      <Projects />
      <About />
      <Contact />
      <Icons />
    </div>
  )
}

export default App
