import React from "react"
import ContactForm from "./ContactForm"
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
  const mainPosition = useSelector((state) => state.mainPosition)
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
        if (aboutPosition === "first") {
          dispatch(aboutSecond())
          dispatch(projectsThird())
        } else {
          dispatch(projectsSecond())
          dispatch(aboutThird())
        }
      }, 700)
    } else {
      dispatch(mainAway())
    }
  }

  return (
    <div>
      <div className={`contact ${position}`}>
        <div className="contact__triangle">
          <h2 onClick={handleClick}>Hire Me</h2>
        </div>
      </div>
      <ContactForm
        ifShow={position === "first" && mainPosition === "mainAway"}
      />
    </div>
  )
}

export default Contact
