import * as actions from '../index.js'
import * as types from '../../constants/constants'

const JSON = [ {
  "contractUntil" : "2022-06-30",
  "dateOfBirth" : "1993-05-13",
  "jerseyNumber" : 9,
  "name" : "Romelu Lukaku",
  "nationality" : "Belgium",
  "position" : "Centre-Forward"
}]

const FILTER = {name: "test"}

describe('todo actions', () => {
  it('selectFilter action', () => {
    expect(actions.selectFilter(types.SHOW_ALL)).toEqual({
      type: types.SET_VISIBILITY_FILTER,
      filter: types.SHOW_ALL
    })
  })

  it('requestPlayers action', () => {
    expect(actions.requestPlayers()).toEqual({
      type: types.REQUEST_PLAYERS
    })
  })

  it('receivePlayers action', () => {
    expect(actions.receivePlayers(JSON)).toEqual({
      type: types.RECEIVE_PLAYERS,
      players: JSON
    })
  })

  it('changeFilter action', () => {
    expect(actions.changeFilter(FILTER)).toEqual({
      type: types.CHANGE_FILTER,
      newFilter: FILTER
    })
  })
  
  // it('filterPlayer action', () => {
  //   expect(actions.filterPlayer(FILTER)).to
  // })

 
})

