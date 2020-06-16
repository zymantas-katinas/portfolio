import React, { useState, useEffect } from "react"
import projectsData from "./projectData.json"
import { AiOutlineLeft } from "react-icons/ai"
import { AiOutlineRight } from "react-icons/ai"
import { useSwipeable, Swipeable } from "react-swipeable"

function Project(props) {
  const [num, setNum] = useState(0)
  const currentProject = projectsData[num]
  const [swap, setSwap] = useState({})
  const [swapBar, setSwapBar] = useState({})
  const [scrollPosition, setScrollPosition] = useState(0)

  // get all project images
  const allProjectImages = currentProject.img.map((item) => {
    return <img key={item} src={item}></img>
  })
  const projectBars = projectsData.map((item) => (
    <span
      key={item.title}
      onClick={() => {
        // setNum(projectsData.indexOf(item))
        setSwapBar({
          opacity: "0.5",
        })
        // setTimeout(() => {
        setNum(projectsData.indexOf(item))
        // }, 100)
        setTimeout(() => {
          setSwapBar({
            opacity: "1",
            transition: "1.6s cubic-bezier(0.11, 0.66, 0.25, 0.88)",
          })
        }, 200)
      }}
      className={`project__bar-span ${projectsData.indexOf(item) === num ? "active" : null}`}
    >
      <span>{projectsData.indexOf(item) + 1}</span>
    </span>
  ))

  const next = () => {
    setSwap({
      transform: "translateX(-150%)",
      transition: "0.3s cubic-bezier(0.11, 0.66, 0.25, 0.88)",
      opacity: "0",
    })

    setTimeout(() => {
      setSwap({
        transform: "translateX(150%)",
        opacity: "0",
        transition: "none",
      })
    }, 320)

    setTimeout(() => {
      if (num === projectsData.length - 1) {
        setNum(0)
      } else {
        setNum(num + 1)
      }
    }, 350)
    setTimeout(() => {
      setSwap({ transform: "translateX(0%)", opacity: "1" })
    }, 370)
  }

  const previous = () => {
    setSwap({
      transform: "translateX(150%)",
      transition: "0.3s cubic-bezier(0.11, 0.66, 0.25, 0.88)",
      opacity: "0",
    })
    setTimeout(() => {
      setSwap({
        transform: "translateX(-150%)",
        opacity: "0",
        transition: "none",
      })
    }, 320)

    setTimeout(() => {
      if (num === 0) {
        setNum(projectsData.length - 1)
      } else {
        setNum(num - 1)
      }
    }, 350)
    setTimeout(() => {
      setSwap({ transform: "translateX(0%)", opacity: "1" })
    }, 370)
  }

  //add bg on scroll
  useEffect(() => {
    const onScroll = (e) => {
      setScrollPosition(window.pageYOffset)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollPosition])

  return (
    <Swipeable onSwipedLeft={() => next()} onSwipedRight={() => previous()}>
      <div className={`project ${scrollPosition > window.innerHeight / 4 ? "scrolledProject" : null} `}>
        <div className={`project__gallery ${props.ifShow ? "fromLeft" : null} `} style={props.ifShow ? swap : null}>
          <div className="project__gallery-images" style={props.ifShow ? swapBar : null}>
            {allProjectImages}
          </div>
        </div>

        <div className="project__info-wrapper">
          <div className={`project__info ${props.ifShow ? "fromRight" : null}`}>
            <div className="project__info-text" style={props.ifShow ? swap : null}>
              <h1>{currentProject.title}</h1>
              <p>{currentProject.paragraph}</p>
            </div>
          </div>
          <div className={`project__control ${props.ifShow ? "fromRight" : null}`}>
            <div className="project__control-left" onClick={previous}>
              <AiOutlineLeft />
            </div>
            <div className="project__control-right" onClick={next}>
              <AiOutlineRight />
            </div>
          </div>

          <div className={`project__bar ${props.ifShow ? "fromBottomBar" : null}`}>{projectBars}</div>

          <div className="project__info-bg"></div>
        </div>
      </div>
    </Swipeable>
  )
}

export default Project
