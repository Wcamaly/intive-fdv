import {REQUEST_PLAYERS, RECEIVE_PLAYERS, URL_GET_DATA, SET_VISIBILITY_FILTER, CHANGE_FILTER} from '../constants/constants' // eslint-disable-next-line

export const selectFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter
})

export const requestPlayers = () => ({
  type: REQUEST_PLAYERS
})

export const receivePlayers = (json) => (
{
  type: RECEIVE_PLAYERS,
  players: json
})


export const changeFilter = (newFilter) => ({
  type: CHANGE_FILTER,
  newFilter
})


const fetchPlayers = () => dispatch => {
  dispatch(requestPlayers())
  return fetch(URL_GET_DATA)
    .then(response => response.json())
    .then(json => dispatch(receivePlayers( json)))
}

const shouldFetchPlayers = (state) => {
  const players = state.playersGetReducers
  if (players.allItems.length === 0) {
    return true
  }
  if (players.isFetching) {
    return false
  }
}


export const filterPlayer = filter => (dispatch) => {  
  return dispatch(selectFilter(filter))
}

export const fetchPlayersIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchPlayers(getState())) {
    return dispatch(fetchPlayers())
  }
}
