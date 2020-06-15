import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { mainAway, mainOnTop } from "../actions"

function Main() {
  const position = useSelector((state) => state.mainPosition)
  const dispatch = useDispatch()

  const handleClick = () => {
    if (position === "mainAway") {
      dispatch(mainOnTop())
    }
  }

  return (
    <div className={`main ${position}`} onClick={handleClick}>
      <div className="main__triangle"></div>
      <h1 className="main__heading">
        I <span>Design</span> <br /> and <span>Develop</span> <br />
        Unique <span>Websites.</span>
      </h1>
      <div className="main__text">
        <p>“A creative person With developers Mindset.”</p>
      </div>
    </div>
  )
}

export default Main
