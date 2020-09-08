import React, { useEffect } from "react"
import projectsData from "./projectData.json"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"
import Swiper from "swiper"
import "swiper/css/swiper.min.css"
import { childVariants, projectInfoVariants } from "../../variants"
import { FaGithub } from "react-icons/fa"

import { FaReact, FaSass, FaGitAlt, FaJava } from "react-icons/fa"
import { DiNpm } from "react-icons/di"
import {ReactComponent as Typescript} from '../../assets/icons/typescript.svg'

// const react = <FaReact />
// const sass = <FaSass />
// const git = < FaGitAlt />
// const java = <FaJava />
// const npm = <DiNpm />
// const typescript = <Typescript />
const iconMap = {
    react: <FaReact />,
    sass: <FaSass />,
    git:  <FaGitAlt />,
    java: <FaJava />,
    npm: <DiNpm />,
    typescript: <Typescript />,
}

function Project() {
  const position = useSelector((state) => state.projectsPosition)

  const allProjects = projectsData.map((item, index) => {
    const images = item.img.map((itemI, indexI) => {
      return (
        <div className="project__image" key={indexI} >
          <img src={itemI} alt="project" />
        </div>
      )
    })

    const pointerEvents = position ? { pointerEvents: "all" } : { pointerEvents: "none" }

    return (
      <div className="swiper-slide" key={index} style={pointerEvents}>
        <motion.div initial={false} animate={position ? "open" : "closed"} className="project">
          <motion.div variants={projectInfoVariants} className="project__info">
            <div>
            <motion.div className="swiper-pagination" variants={childVariants}></motion.div>
            <motion.h1 variants={childVariants}>{item.title}</motion.h1>
            <motion.p variants={childVariants}>{item.paragraph}</motion.p>
            </div>
            <div>
            {item.tools && 
            <motion.div variants={childVariants} className ="project__info-tools">
              <h3>Tools:</h3>
              <div className ="project__info-tools-icons">
              {item.tools.map((item) =>  {
               return iconMap[item]
              })}
              </div>
            </motion.div>}
            <motion.div variants={childVariants} className ="project__info-links">
            {item.link &&
             <a href={item.link} rel="noreferrer" target="_blank">
                {item.link}
              </a>
                }
               {item.gitlink &&
              <a href={item.gitlink} rel="noreferrer"  target="_blank">
               <FaGithub />
              </a>}
           
            </motion.div>
            </div>
         
          </motion.div>
          <motion.div variants={childVariants} className="project__gallery">
            {images}
          </motion.div>
        </motion.div>
      </div>
    )
  })

  useEffect(() => {
    new Swiper(".swiper-container", {
      loop: false,
      slidesPerView: "1",
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    })
  }, [])

  return (
    <div className="swiper-container" style={{ zIndex: position ? 100 : -1 }}>
      <div className="swiper-wrapper">
        {allProjects}
      </div>
    </div>
  )
}

export default Project
