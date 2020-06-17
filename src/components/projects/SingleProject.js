import React, { useState, useEffect } from "react"

function SingleProject(props) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const { img, title, paragraph, ifShow } = props
  const allImages = img.map((item) => {
    return <img key={item} src={item}></img>
  })
  //add bg on scroll
  useEffect(() => {
    const onScroll = (e) => {
      setScrollPosition(window.pageYOffset)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollPosition])

  return (
    <div className="swiper-slide">
      {/* <div className={`project ${scrollPosition > window.innerHeight / 4 ? "scrolledProject" : null} `}> */}
      <div className="project__gallery">
        <div className="project__gallery-images">{allImages}</div>
      </div>
      <div className="project__info-wrapper">
        <div className="project__info">
          <div className="project__info-text">
            <h1>{title}</h1>
            <p>{paragraph}</p>
          </div>
        </div>

        {/* <div className={`project__bar ${props.ifShow ? "fromBottomBar" : null}`}>{projectBars}</div> */}
        <div className="project__info-bg"></div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default SingleProject
