/**
 *
 *  ACTIONS
 * 
 */
export const REQUEST_PLAYERS = 'REQUEST_PLAYERS'
export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS'
export const CHANGE_FILTER = 'CHANGE_FILTER'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'



/**
 * 
 *   FILTERS
 * 
 */
export const SHOW_ALL = 'show_all'
export const SHOW_FILTER= 'show_filter'
export const SHOW_NAME = 'show_name'
export const SHOW_POSITION = 'show_position'
export const SHOW_AGE = 'show_age'


/**
*
* Positions
* 
**/
export const POSITIONS = [
  "Attacking Midfield",
  "Central Midfield",
  "Centre-Back",
  "Centre-Forward",
  "Defensive Midfield",
  "Keeper",
  "Left Midfield",
  "Left Wing",
  "Left-Back",
  "Right-Back",
]



/**
 *
 * CONFIG DATA
 * 
 */
export const URL_GET_DATA = 'https://football-players-b31f2.firebaseio.com/players.json?print=pretty'
