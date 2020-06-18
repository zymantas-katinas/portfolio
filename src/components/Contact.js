import React from "react"
import ContactForm from "./ContactForm"
import { useSelector, useDispatch } from "react-redux"
import { aboutAway, mainAway, projectsAway } from "../../actions"

function Contact() {
  const position = useSelector((state) => state.contactPosition)

  const handleClick = () => {
    dispatch(projectsAway())
    dispatch(mainAway())
    dispatch(aboutAway())
  }

  return (
    <div>
      <div className="contact">
        <div className="contact__triangle">
          <h2 onClick={handleClick}>Hire Me</h2>
        </div>
      </div>
      {position === "contactSelected" ? <ContactForm /> : null}
    </div>
  )
}

export default Contact
