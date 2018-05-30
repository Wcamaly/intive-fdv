import {playersGetReducers} from '../getFetch'
import * as types from '../../constants/constants'

const defaults =  


describe('playersGetReducers reducer', () => {
  it('should handle initial state', () => {
    expect(
      playersGetReducers(undefined, {})
    ).toEqual({
        isFetching: null,
        allItems: []
        }
    )
  })

  it('should handle REQUEST_PLAYERS', () => {
    expect(
      playersGetReducers({
        isFetching: true,
        allItems: []
      }, {
        type: types.REQUEST_PLAYERS
      })
    ).toEqual(
      {
        isFetching: true,
        allItems: []
        }
    )
  })

  it('should handle RECEIVE_PLAYERS', () => {
    expect(
      playersGetReducers({
        isFetching: true,
        allItems: []
      }, {
        type: types.RECEIVE_PLAYERS,
        isFetching: false,
        players: [{test:"test"}]
      })
    ).toEqual({
        isFetching: false,
        allItems: [{test:"test"}]
        }
    )
  })

})
