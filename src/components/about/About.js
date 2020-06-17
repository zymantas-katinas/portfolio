import React from "react"
import AboutMe from "./AboutMe"
import { useSelector, useDispatch } from "react-redux"
import {
  projectsDefault,
  projectsSecond,
  projectsThird,
  contactDefault,
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
  const projectsPosition = useSelector((state) => state.projectsPosition)
  const dispatch = useDispatch()

  const handleClick = () => {
    if (window.innerWidth < 600) {
      if (position !== "first") {
        dispatch(mainAway())
        dispatch(aboutFirst())
        if (position === "second") {
          if (contactPosition === "first") {
            dispatch(contactSecond())
            dispatch(projectsThird())
          } else if (projectsPosition === "first" || projectsPosition === "projectsDefault") {
            dispatch(projectsSecond())
            dispatch(contactThird())
          }
        } else {
          if (contactPosition === "first") {
            dispatch(contactThird())
            dispatch(projectsSecond())
          } else if (projectsPosition === "first") {
            dispatch(projectsThird())
            dispatch(contactSecond())
          }
        }
      } else {
        dispatch(mainAway())
      }
    } else {
      if (position !== "first") {
        dispatch(aboutAway())
        dispatch(mainAway())
        if (projectsPosition === "first") {
          dispatch(projectsDefault())
        } else if (contactPosition === "first") {
          dispatch(contactDefault())
        }
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
