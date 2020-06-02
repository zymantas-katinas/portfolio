import React from "react"
// import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  projectsAway,
  projectsFirst,
  projectsSecond,
  projectsThird,
  contactAway,
  contactSecond,
  contactThird,
  aboutAway,
  aboutTop,
  aboutFirst,
  aboutSecond,
  aboutThird,
  mainAway,
  mainDefault,
} from "../actions"

function About() {
  const position = useSelector((state) => state.aboutPosition)
  const contactPosition = useSelector((state) => state.contactPosition)

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
      }, 500)

      if (contactPosition === "first") {
        dispatch(contactSecond())
        dispatch(projectsThird())
      } else {
        dispatch(projectsSecond())
        dispatch(contactThird())
      }
    } else {
      dispatch(mainAway())
    }
  }

  return (
    <div className={`about ${position}`}>
      <div className="about__triangle" onClick={handleClick}>
        <h2>About</h2>
      </div>
    </div>
  )
}

export default About
