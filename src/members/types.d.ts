export interface Member {
  crewId: number
  id: number
  image: string
  name: string
  userId: number
}

export interface MemberState {
  list: Member[]
  isLoading: boolean
  error: Error
}