const contactPositionReducer = (state = "away", action) => {
  switch (action.type) {
    case "CONTACT_SELECTED":
      return "contactSelected"
    case "CONTACT_AWAY":
      return "contactAway"
    default:
      return state
  }
}
export default contactPositionReducer
