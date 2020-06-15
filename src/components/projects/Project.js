import React, { useState, useEffect } from "react"
import projectsData from "./projectData.json"
import { AiOutlineLeft } from "react-icons/ai"
import { AiOutlineRight } from "react-icons/ai"

function Project(props) {
  const [num, setNum] = useState(0)
  const currentProject = projectsData[num]

  // get all project images
  const allProjectImages = currentProject.img.map((item) => {
    return <img key={item} src={item}></img>
  })
  const projectBars = projectsData.map((item) => (
    <span
      key={item.title}
      onClick={() => {
        setNum(projectsData.indexOf(item))
      }}
      className={`project__bar-span ${
        projectsData.indexOf(item) === num ? "active" : null
      }`}
    >
      <span>{projectsData.indexOf(item) + 1}</span>
    </span>
  ))
  // next / previous project
  const previous = () => {
    if (num === 0) {
      setNum(projectsData.length - 1)
    } else {
      setNum(num - 1)
    }
  }
  const next = () => {
    if (num === projectsData.length - 1) {
      setNum(0)
    } else {
      setNum(num + 1)
    }
  }

  return (
    <div className="project">
      <div className={`project__gallery ${props.ifShow ? "fromLeft" : null}`}>
        <div className="project__gallery-images">{allProjectImages}</div>
      </div>
      <div className="project__info-wrapper">
        <div className={`project__info ${props.ifShow ? "fromRight" : null}`}>
          <div>
            <h1>{currentProject.title}</h1>
            <p>{currentProject.paragraph}</p>
          </div>
          <div className="project__control">
            <div className="project__control-left" onClick={previous}>
              <AiOutlineLeft />
            </div>
            <div className="project__control-right" onClick={next}>
              <AiOutlineRight />
            </div>
          </div>
        </div>
        <div
          className={`project__bar ${props.ifShow ? "fromBottomBar" : null}`}
        >
          {projectBars}
        </div>
      </div>
    </div>
  )
}

export default Project
