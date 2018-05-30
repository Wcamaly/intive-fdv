import {playersFilterReducer, changeFilter} from '../visibilityFilter'
import * as types from '../../constants/constants'


describe('playersFilterReducer and changeFilter reducer', () => {
  it('should handle initial state playersFilterReducer', () => {
    expect(
      playersFilterReducer(undefined, {})
    ).toEqual(types.SHOW_ALL)
  })

   it('should handle initial state changeFilter', () => {
    expect(
      changeFilter(undefined, {})
    ).toEqual({})
  })




  it('should handle playersFilterReducer', () => {
    expect(
      playersFilterReducer(types.SHOW_ALL,{
        type: types.SET_VISIBILITY_FILTER,
        filter: types.SHOW_FILTER
      })
    ).toEqual(types.SHOW_FILTER)
  })

  it('should handle changeFilter', () => {
    expect(
      changeFilter({}, {
        type: types.CHANGE_FILTER,
        newFilter: {"test":"test"}
      })
    ).toEqual({"test":"test"})
  })

})
