import React from "react"
import { useSelector } from "react-redux"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { ReactComponent as Upwork } from "../assets/images/upwork-icon.svg"

function Icons() {
  const position = useSelector((state) => state.projectsPosition)
  const mainPosition = useSelector((state) => state.mainPosition)

  const ifShow = position !== "first" && mainPosition === "mainAway"

  return (
    <div className={`icons ${ifShow ? "fromBottomIcons" : null}`}>
      <FaLinkedin />
      <FaGithub />
      <div className="icons__upwork">
        <Upwork />
      </div>
    </div>
  )
}

export default Icons
