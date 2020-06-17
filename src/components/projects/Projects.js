import React from "react"
import Project from "./Project"
import { useSelector, useDispatch } from "react-redux"
import {
  projectsAway,
  projectsTop,
  projectsFirst,
  contactDefault,
  contactTop,
  contactSecond,
  contactThird,
  aboutDefault,
  aboutSecond,
  aboutThird,
  mainAway,
} from "../../actions"

function Projects() {
  const position = useSelector((state) => state.projectsPosition)
  const aboutPosition = useSelector((state) => state.aboutPosition)
  const contactPosition = useSelector((state) => state.contactPosition)
  const mainPosition = useSelector((state) => state.mainPosition)

  const dispatch = useDispatch()
  const handleClick = () => {
    if (window.innerWidth < 600) {
      if (position !== "first" && position !== "projectsDefault") {
        dispatch(mainAway())
        dispatch(projectsFirst())
        if (position === "second") {
          if (aboutPosition === "first") {
            dispatch(aboutSecond())
            dispatch(contactThird())
          } else {
            dispatch(contactSecond())
            dispatch(aboutThird())
          }
        } else {
          if (aboutPosition === "first") {
            dispatch(aboutThird())
            dispatch(contactSecond())
          } else {
            dispatch(contactThird())
            dispatch(aboutSecond())
          }
        }
      } else if (position === "projectsDefault") {
        dispatch(mainAway())
        dispatch(projectsFirst())
      }
    } else {
      if (position !== "first" && position !== "projectsDefault") {
        dispatch(mainAway())
        dispatch(projectsAway())
        if (contactPosition === "first") {
          dispatch(contactDefault())
        } else if (aboutPosition === "first") {
          dispatch(aboutDefault())
        }

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
      } else if (position === "projectsDefault") {
        dispatch(mainAway())
        dispatch(projectsFirst())
      }
    }
  }

  return (
    <div>
      <Project ifShow={position === "first" && mainPosition === "mainAway"} />

      <div className={`projects ${position}`}>
        <div className="projects__triangle">
          <h2 onClick={handleClick}>Projects</h2>
          {/* <div className="project__bg"></div> */}
        </div>
      </div>
    </div>
  )
}

export default Projects
