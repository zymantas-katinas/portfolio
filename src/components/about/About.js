import React from "react"
import AboutMe from "./AboutMe"
import { useSelector, useDispatch } from "react-redux"
import {
  projectsSecond,
  projectsThird,
  contactSecond,
  contactThird,
  aboutAway,
  aboutTop,
  aboutFirst,
  mainAway,
} from "../../actions"

function About() {
  const position = useSelector((state) => state.aboutPosition)
  const contactPosition = useSelector((state) => state.contactPosition)
  const mainPosition = useSelector((state) => state.mainPosition)
  const dispatch = useDispatch()

  const handleClick = () => {
    if (position !== "first") {
      dispatch(aboutAway())
      dispatch(mainAway())
      setTimeout(() => {
        dispatch(aboutTop())
      }, 300)

      setTimeout(() => {
        dispatch(aboutFirst())
        if (contactPosition === "first") {
          dispatch(contactSecond())
          dispatch(projectsThird())
        } else {
          dispatch(projectsSecond())
          dispatch(contactThird())
        }
      }, 700)
    } else {
      dispatch(mainAway())
    }
  }

  return (
    <div className={`about ${position}`}>
      <div className="about__triangle">
        <h2 onClick={handleClick}>Who am I?</h2>
        <AboutMe ifShow={position === "first" && mainPosition === "mainAway"} />
      </div>
    </div>
  )
}

export default About
