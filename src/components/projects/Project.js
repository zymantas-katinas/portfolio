import React, { useState, useEffect } from "react"
import projectsData from "./projectData.json"
import Swiper from "swiper"
import "swiper/css/swiper.min.css"

function Project(props) {
  // get all project images
  const allProjects = projectsData.map((item) => {
    const images = item.img.map((item) => {
      return <img key={item} src={item}></img>
    })
    return (
      <div className="swiper-slide">
        <div className="project">
          <div className="project__info">
            <div className="project__info-text">
              <h1>{item.title}</h1>
              <p>{item.paragraph}</p>
            </div>
          </div>
          <div className="project__gallery">{images}</div>
        </div>
      </div>
    )
  })

  let [mySwiper, setMySwiper] = useState(null)
  useEffect(() => {
    let mySwiper = new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: "1",
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    })
    setMySwiper(mySwiper)
  }, [])

  return (
    <div className={`swiper-container ${props.ifShow ? "fromLeft" : null} `}>
      <div className="swiper-wrapper">{allProjects}</div>
      <div className="swiper-pagination"></div>
    </div>
  )
}

export default Project
