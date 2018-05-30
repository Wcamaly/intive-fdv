import {SET_VISIBILITY_FILTER, SHOW_ALL, CHANGE_FILTER} from '../constants/constants'

export const playersFilterReducer = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export const changeFilter = (state = {}, action) => {
   switch (action.type) {
    case CHANGE_FILTER:
      return Object.assign(state, action.newFilter)
    default:
      return state
  }
}