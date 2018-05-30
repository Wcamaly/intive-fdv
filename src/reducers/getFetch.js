import {REQUEST_PLAYERS, RECEIVE_PLAYERS} from '../constants/constants'

export const playersGetReducers = (state = {
  isFetching: null,
  allItems: []
}, action) => {
  switch (action.type) {
    case REQUEST_PLAYERS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_PLAYERS:
      return {
        ...state,
        isFetching: false,
        allItems: action.players
      }
    default:
      return state
  }
}