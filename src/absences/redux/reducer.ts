const initialState = {
  list: [],
  isLoading: false,
  error: {}
}
export const absencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ABSENCES': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'FETCH_ABSENCES': {
      return {
        ...state,
        isLoading: false,
        list: action.payload
      }
    }
    case 'ABSENCES_ERROR': {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
}