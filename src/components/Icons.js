import React from "react"
import { useSelector } from "react-redux"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { ReactComponent as Upwork } from "../assets/images/upwork-icon.svg"

function Icons() {
  const position = useSelector((state) => state.projectsPosition)
  const mainPosition = useSelector((state) => state.mainPosition)
  const contactPosition = useSelector((state) => state.contactPosition)

  const ifShow = position !== "first" && mainPosition === "mainAway"
  const ifShowStatus = contactPosition === "first"

  return (
    <div>
      <div className="bottom-triangle"></div>
      <div className={`bottom-info ${ifShow ? "fromBottomIcons" : null}`}>
        <div className="bottom-info__icons">
          <FaLinkedin />
          <FaGithub />
          <div className="bottom-info__icons-upwork">
            <Upwork />
          </div>
        </div>
        <div
          className={`bottom-info__status ${ifShowStatus ? "visible" : null}`}
        >
          <h2>
            current status:
            <span> a</span>
            <span>v</span>
            <span>a</span>
            <span>i</span>
            <span>l</span>
            <span>a</span>
            <span>b</span>
            <span>l</span>
            <span>e</span>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Icons
