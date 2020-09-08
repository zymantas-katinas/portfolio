import React from 'react'
import { useDispatch} from "react-redux"
import { contactAway,contactSelected, aboutAway, projectsAway, setTrianglesAway, mainAway } from "../actions"

function Navbar() {
    const dispatch = useDispatch()

    const handleClickContact = () => {
        dispatch(setTrianglesAway())
        dispatch(aboutAway())
        dispatch(projectsAway())
        dispatch(contactSelected())
        dispatch(mainAway())
      }

    return (
        <div className = "navbar">
            <h1>Projects</h1>
           <h1 >Who am I?</h1>
             <h1 onClick={handleClickContact}>Hire me</h1>
            </div>
    )
}

export default Navbar
