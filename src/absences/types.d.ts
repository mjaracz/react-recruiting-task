import { Product } from './redux/types'

export interface ItemProps {
  deleteItem: (id: number) => void
  absences: AbsencePerson
}

export interface AbsencesState {
  isLoading: boolean
  list: AbsencePerson[]
  error: Error
}

export interface AbsencePerson {
  admitterId: number | null
  admitterNote: string
  confirmedAt: string
  createAt: string
  crewId: number
  endDate: string
  id: number
  memberNote: string
  rejectedAt: number | null
  startDate: string
  type: string
  userId: number
}