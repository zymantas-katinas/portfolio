import contactPositionReducer from "./contactPosition"
import projectsPositionReducer from "./projectsPosition"
import mainPositionReducer from "./mainPosition"
import aboutPositionReducer from "./aboutPosition"
import trianglesPosReducer from './trianglesPos'
import { combineReducers } from "redux"

const allReducers = combineReducers({
  projectsPosition: projectsPositionReducer,
  contactPosition: contactPositionReducer,
  mainPosition: mainPositionReducer,
  aboutPosition: aboutPositionReducer,
  trianglesPos: trianglesPosReducer,
})

export default allReducers
