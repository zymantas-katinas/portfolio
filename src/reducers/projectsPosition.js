// export default projectsPositionReducer
const projectsPositionReducer = (state = "away", action) => {
  switch (action.type) {
    case "PROJECTS_AWAY":
      return "projectsAway"
    case "PROJECTS_SELECTED":
      return "projectsSelected"
    default:
      return state
  }
}

export default projectsPositionReducer
