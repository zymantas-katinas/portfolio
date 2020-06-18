const aboutPositionReducer = (state = "away", action) => {
  switch (action.type) {
    case "ABOUT_SELECTED":
      return "aboutSelected"
    case "ABOUT_AWAY":
      return "aboutAway"
    default:
      return state
  }
}

export default aboutPositionReducer
