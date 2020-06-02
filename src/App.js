import React from "react"
import "./assets/css/main.css"
import Main from "./components/Main"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Main />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App
