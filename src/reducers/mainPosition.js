const mainPositionReducer = (state = "mainAway", action) => {
  switch (action.type) {
    case "MAIN_AWAY":
      return "mainAway"
    case "MAIN_SELECTED":
      return "mainSelected"
    default:
      return state
  }
}

export default mainPositionReducer
