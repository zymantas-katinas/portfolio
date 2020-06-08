// export default projectsPositionReducer
const projectsPositionReducer = (state = "", action) => {
  switch (action.type) {
    case "PROJECTS_AWAY":
      return "away"
    case "PROJECTS_TOP":
      return "top"
    case "PROJECTS_FIRST":
      return "first"
    case "PROJECTS_SECOND":
      return "second"
    case "PROJECTS_THIRD":
      return "third"
    default:
      return state
  }
}

export default projectsPositionReducer
