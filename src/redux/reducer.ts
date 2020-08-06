import {combineReducers} from 'redux'
import {absencesReducer} from '../absences/redux/'
import {membersReducer} from '../members/redux'

export const rootReducer = combineReducers({
  absences: absencesReducer,
  members: membersReducer
})