import React from "react"
// import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  projectsAway,
  projectsTop,
  projectsFirst,
  projectsSecond,
  projectsThird,
  contactAway,
  contactSecond,
  contactThird,
  aboutAway,
  aboutSecond,
  aboutThird,
  mainAway,
  mainDefault,
} from "../actions"

function Projects() {
  const position = useSelector((state) => state.projectsPosition)
  const aboutPosition = useSelector((state) => state.aboutPosition)
  const dispatch = useDispatch()
  const handleClick = () => {
    if (position !== "first") {
      dispatch(mainAway())
      dispatch(projectsAway())
      setTimeout(() => {
        dispatch(projectsTop())
      }, 300)
      setTimeout(() => {
        dispatch(projectsFirst())
      }, 500)

      if (aboutPosition === "first") {
        dispatch(aboutSecond())
        dispatch(contactThird())
      } else {
        dispatch(contactSecond())
        dispatch(aboutThird())
      }
    } else {
      dispatch(mainAway())
    }
  }

  return (
    <div className={`projects ${position}`}>
      <div className="projects__triangle" onClick={handleClick}>
        <h2>Projects</h2>
      </div>
    </div>
  )
}

export default Projects
