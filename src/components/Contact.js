import React from "react"
import ContactForm from "./ContactForm"
import { useSelector, useDispatch } from "react-redux"
import {
  projectsDefault,
  projectsSecond,
  projectsThird,
  contactAway,
  contactFirst,
  contactTop,
  aboutDefault,
  aboutSecond,
  aboutThird,
  mainAway,
} from "../actions"

function Contact() {
  const position = useSelector((state) => state.contactPosition)
  const aboutPosition = useSelector((state) => state.aboutPosition)
  const mainPosition = useSelector((state) => state.mainPosition)
  const projectsPosition = useSelector((state) => state.projectsPosition)
  const dispatch = useDispatch()

  const handleClick = () => {
    if (window.innerWidth < 600) {
      if (position !== "first") {
        dispatch(mainAway())
        dispatch(contactFirst())

        if (aboutPosition === "first") {
          dispatch(aboutThird())
          dispatch(projectsSecond())
        } else {
          dispatch(projectsThird())
          dispatch(aboutSecond())
        }
      } else {
        dispatch(mainAway())
      }
    } else {
      if (position !== "first") {
        dispatch(mainAway())
        dispatch(contactAway())
        if (projectsPosition === "first") {
          dispatch(projectsDefault())
        } else if (aboutPosition === "first") {
          dispatch(aboutDefault())
        }
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
  }

  return (
    <div>
      <div className={`contact ${position}`}>
        <div className="contact__triangle">
          <h2 onClick={handleClick}>Hire Me</h2>
        </div>
      </div>
      <ContactForm ifShow={position === "first" && mainPosition === "mainAway"} />
    </div>
  )
}

export default Contact
