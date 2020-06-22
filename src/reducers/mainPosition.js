const mainPositionReducer = (state = true, action) => {
  switch (action.type) {
    case "MAIN_AWAY":
      return false
    case "MAIN_SELECTED":
      return true
    default:
      return state
  }
}

export default mainPositionReducer
