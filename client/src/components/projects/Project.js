import React, { useEffect } from "react"
import projectsData from "./projectData.json"
import { useSelector } from "react-redux"
import { AnimatePresence, motion } from "framer-motion"
import Swiper from "swiper"
import "swiper/css/swiper.min.css"
import { projectInfoVariants } from "../../variants"

function Project() {
  const position = useSelector((state) => state.projectsPosition)

  const allProjects = projectsData.map((item) => {
    const images = item.img.map((item) => {
      return (
        <div className="project__image">
          <img key={item} src={item} alt="project" />
        </div>
      )
    })
    const variants = {
      open: {
        transition: { staggerChildren: 0.12, delayChildren: 0.2 },
      },
      closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
      },
    }

    const childVariants = {
      open: {
        y: 0,
        opacity: 1,
        transition: {
          y: { stiffness: 1000, velocity: -100 },
        },
      },
      closed: {
        y: 50,
        opacity: 0,
        transition: {
          y: { stiffness: 1000 },
        },
      },
    }
    const pointerEvents = position ? { pointerEvents: "all" } : { pointerEvents: "none" }

    return (
      <div className="swiper-slide" key={item.title} style={pointerEvents}>
        <motion.div initial={false} animate={position ? "open" : "closed"} className="project">
          <motion.div variants={variants} className="project__info">
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
      loop: true,
      slidesPerView: "1",
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    })
  }, [])

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {/* <motion.div initial={false} animate={position ? "open" : "closed"} className="swiper-wrapper"> */}
        {allProjects}
        {/* </motion.div> */}
      </div>
      {/* <div className="swiper-pagination"></div> */}
    </div>
  )
}

export default Project
