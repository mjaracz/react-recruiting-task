import {combineReducers} from 'redux'
import {absencesReducer} from '../absences/redux/'

export const rootReducer = combineReducers({
  absences: absencesReducer
})