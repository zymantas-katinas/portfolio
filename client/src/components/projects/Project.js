import React, { useEffect } from "react"
import projectsData from "./projectData.json"
import { useSelector } from "react-redux"
import { motion } from "framer-motion"
import Swiper from "swiper"
import "swiper/css/swiper.min.css"
import { childVariants, projectInfoVariants } from "../../variants"

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
            <motion.div className="swiper-pagination" variants={childVariants}></motion.div>
            <motion.h1 variants={childVariants}>{item.title}</motion.h1>
            <motion.p variants={childVariants}>{item.paragraph}</motion.p>
            <motion.a href={item.link} variants={childVariants} target="_blank">
              {item.link}
            </motion.a>
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
