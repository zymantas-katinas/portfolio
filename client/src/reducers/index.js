import contactPositionReducer from "./contactPosition"
import projectsPositionReducer from "./projectsPosition"
import mainPositionReducer from "./mainPosition"
import aboutPositionReducer from "./aboutPosition"
import colorNumberReducer from "./colorNumber"
import { combineReducers } from "redux"

const allReducers = combineReducers({
  projectsPosition: projectsPositionReducer,
  contactPosition: contactPositionReducer,
  mainPosition: mainPositionReducer,
  aboutPosition: aboutPositionReducer,
  colorNumber: colorNumberReducer,
})

export default allReducers
