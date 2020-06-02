import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  projectsSecond,
  projectsThird,
  contactAway,
  contactFirst,
  contactTop,
  aboutSecond,
  aboutThird,
  mainAway,
} from "../actions"

function Contact() {
  const position = useSelector((state) => state.contactPosition)
  const aboutPosition = useSelector((state) => state.aboutPosition)
  const dispatch = useDispatch()

  const handleClick = () => {
    if (position !== "first") {
      dispatch(mainAway())
      dispatch(contactAway())
      setTimeout(() => {
        dispatch(contactTop())
      }, 300)
      setTimeout(() => {
        dispatch(contactFirst())
      }, 500)

      if (aboutPosition === "first") {
        dispatch(aboutSecond())
        dispatch(projectsThird())
      } else {
        dispatch(projectsSecond())
        dispatch(aboutThird())
      }
    } else {
      dispatch(mainAway())
    }
  }

  return (
    <div className={`contact ${position}`}>
      <div className="contact__triangle" onClick={handleClick}>
        <h2>Get in touch</h2>
      </div>
    </div>
  )
}

export default Contact
