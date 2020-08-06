import {AbsencesState} from '../absences/types'

export interface RootState {
  absences: AbsencesState
  members: MembersState
}