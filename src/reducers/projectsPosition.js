// export default projectsPositionReducer
const projectsPositionReducer = (state = false, action) => {
  switch (action.type) {
    case "PROJECTS_AWAY":
      return false
    case "PROJECTS_SELECTED":
      return true
    default:
      return state
  }
}

export default projectsPositionReducer
