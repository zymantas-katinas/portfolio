import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { contactAway,contactSelected, aboutAway, projectsAway, setTrianglesAway, mainAway, aboutSelected, projectsSelected } from "../actions"

function Navbar() {
    const dispatch = useDispatch()
    const projectsPosition = useSelector((state) => state.projectsPosition)
    const aboutPosition = useSelector((state) => state.aboutPosition)
    const contactPosition = useSelector((state) => state.contactPosition)
    const mainPosition = useSelector((state) => state.mainPosition)

    const handleClickContact = () => {
        dispatch(contactSelected())
        dispatch(setTrianglesAway())
        dispatch(aboutAway())
        dispatch(projectsAway())
        dispatch(mainAway())
    }

    const handleClickAbout = () => {
        if(!aboutPosition) {
            dispatch(aboutSelected())
            if(mainPosition) {
                dispatch(setTrianglesAway())
                dispatch(mainAway())
            }
            projectsPosition &&
            dispatch(projectsAway())
            contactPosition &&
            dispatch(contactAway())
        } 
    }

    const handleClickProjects = () => {
        dispatch(setTrianglesAway())
        dispatch(projectsSelected())
        dispatch(aboutAway())
        dispatch(mainAway())
        dispatch(contactAway())
    }

    return (
        <div className = "navbar">
            <div className={projectsPosition && 'selected'}>
                 <h2 onClick={handleClickProjects}>Projects</h2>
            </div>
            <div className={aboutPosition && 'selected'}>
              <h2 onClick={handleClickAbout}>Who am I?</h2>
            </div>
            <div className={contactPosition && 'selected'}>
                <h2 onClick={handleClickContact}>Hire me</h2>
             </div>
            </div>
    )
}

export default Navbar
