const mainPositionReducer = (state = "mainAway", action) => {
  switch (action.type) {
    case "MAIN_AWAY":
      return "mainAway"
    case "MAIN_ON_TOP":
      return "mainTop"
    default:
      return state
  }
}

export default mainPositionReducer
