const trianglesPosReducer = (state = true, action) => {
  switch (action.type) {
    case "TRIANGLES_AWAY":
      return false
    case "TRIANGLES_BACK":
      return true
    default:
      return state
  }
}

export default trianglesPosReducer
