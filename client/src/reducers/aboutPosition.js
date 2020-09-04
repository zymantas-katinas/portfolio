const aboutPositionReducer = (state = false, action) => {
  switch (action.type) {
    case "ABOUT_SELECTED":
      return true
    case "ABOUT_AWAY":
      return false
    default:
      return state
  }
}

export default aboutPositionReducer
