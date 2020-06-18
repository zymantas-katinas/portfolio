import React from "react"
import Project from "./Project"
import { useSelector, useDispatch } from "react-redux"
import { contactAway, mainAway, aboutAway } from "../../actions"

function Projects() {
  const position = useSelector((state) => state.projectsPosition)
  // const aboutPosition = useSelector((state) => state.aboutPosition)
  // const contactPosition = useSelector((state) => state.contactPosition)
  // const mainPosition = useSelector((state) => state.mainPosition)

  // const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(aboutAway())
    dispatch(mainAway())
    dispatch(contactAway())
  }

  return (
    <div>
      {position === "projectsSelected" ? <Project /> : null}
      <div className="projects">
        <div className="projects__triangle">
          <h2 onClick={handleClick}>Projects</h2>
        </div>
      </div>
    </div>
  )
}

export default Projects
