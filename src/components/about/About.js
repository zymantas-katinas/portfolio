import React from "react"
import AboutMe from "./AboutMe"
import { useSelector, useDispatch } from "react-redux"
import { contactAway, mainAway, projectsAway } from "../../actions"

function About() {
  const position = useSelector((state) => state.aboutPosition)
  // const contactPosition = useSelector((state) => state.contactPosition)
  // const mainPosition = useSelector((state) => state.mainPosition)
  // const projectsPosition = useSelector((state) => state.projectsPosition)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(projectsAway())
    dispatch(mainAway())
    dispatch(contactAway())
  }

  return (
    <div className="about">
      <div className="about__triangle">
        <h2 onClick={handleClick}>Who am I?</h2>
        {position === "aboutSelected" ? <AboutMe /> : null}
      </div>
    </div>
  )
}

export default About
