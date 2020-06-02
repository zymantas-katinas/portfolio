const contactPositionReducer = (state = "second", action) => {
  switch (action.type) {
    case "CONTACT_AWAY":
      return "away"
    case "CONTACT_TOP":
      return "top"
    case "CONTACT_FIRST":
      return "first"
    case "CONTACT_SECOND":
      return "second"
    case "CONTACT_THIRD":
      return "third"
    default:
      return state
  }
}
export default contactPositionReducer
