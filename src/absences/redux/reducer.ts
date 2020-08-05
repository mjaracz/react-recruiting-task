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
        isLoading: action.payload
      }
    }
    case 'FETCH_ABSENCES': {
      return {
        ...state,
        isLoading: false,
        list: state.list
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