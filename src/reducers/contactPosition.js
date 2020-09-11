const contactPositionReducer = (state = false, action) => {
  switch (action.type) {
    case "CONTACT_SELECTED":
      return true
    case "CONTACT_AWAY":
      return false
    default:
      return state
  }
}
export default contactPositionReducer
