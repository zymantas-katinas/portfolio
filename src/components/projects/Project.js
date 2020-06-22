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
    return (
      <div className="swiper-slide" key={item.title}>
        <div className="project">
          <AnimatePresence>
            {position && (
              <motion.div
                variants={projectInfoVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="project__info"
              >
                <div className="project__info-text">
                  <h1>{item.title}</h1>
                  <p>{item.paragraph}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="project__gallery">{images}</div>
        </div>
      </div>
    )
  })

  // let [mySwiper, setMySwiper] = useState(null)

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
      <div className="swiper-wrapper">{allProjects}</div>
      <div className="swiper-pagination"></div>
    </div>
  )
}

export default Project
