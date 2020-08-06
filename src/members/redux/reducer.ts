const initialState = {
  list: [],
  isLoading: false,
  error: {}
}
export const membersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MEMBERS': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'FETCH_MEMBERS': {
      return {
        ...state,
        isLoading: false,
        list: action.payload
      }
    }
    case 'MEMBERS_ERROR': {
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