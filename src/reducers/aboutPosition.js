const aboutPositionReducer = (state = "third", action) => {
  switch (action.type) {
    case "ABOUT_AWAY":
      return "away"
    case "ABOUT_TOP":
      return "top"
    case "ABOUT_FIRST":
      return "first"
    case "ABOUT_SECOND":
      return "second"
    case "ABOUT_THIRD":
      return "third"
    default:
      return state
  }
}

export default aboutPositionReducer
