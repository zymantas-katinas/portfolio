import React from "react"
import Project from "./Project"
import { useSelector, useDispatch } from "react-redux"
import {
  projectsAway,
  projectsTop,
  projectsFirst,
  contactSecond,
  contactThird,
  aboutSecond,
  aboutThird,
  mainAway,
} from "../../actions"

function Projects() {
  const position = useSelector((state) => state.projectsPosition)
  const aboutPosition = useSelector((state) => state.aboutPosition)
  const mainPosition = useSelector((state) => state.mainPosition)

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
        if (aboutPosition === "first") {
          dispatch(aboutSecond())
          dispatch(contactThird())
        } else {
          dispatch(contactSecond())
          dispatch(aboutThird())
        }
      }, 700)
    } else {
      dispatch(mainAway())
    }
  }

  return (
    <div>
      <Project ifShow={position === "first" && mainPosition === "mainAway"} />

      <div className={`projects ${position}`}>
        <div className="projects__triangle">
          <h2 onClick={handleClick}>Projects</h2>
        </div>
      </div>
    </div>
  )
}

export default Projects
