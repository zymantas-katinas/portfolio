import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { mainAway, mainOnTop } from "../actions"

function Main() {
  const position = useSelector((state) => state.mainPosition)
  const dispatch = useDispatch()

  const handleClick = () => {
    if (position === "mainAway") {
      dispatch(mainOnTop())
    } else {
      // dispatch(mainAway())
    }
  }

  return (
    <div className={`main ${position}`} onClick={handleClick}>
      <h1 className="main__heading">
        I Design <br /> and Develop <br />
        Modern Websites.
      </h1>
      <div className="main__arrow">
        <h1>\/</h1>
      </div>
    </div>
  )
}

export default Main
