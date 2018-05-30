import { createSelector } from 'reselect'
import { SHOW_ALL, SHOW_NAME, SHOW_POSITION, SHOW_AGE, SHOW_FILTER } from '../constants/constants'
import { calculateYear } from '../utils/'

const getVisibility = state => state.playersFilterReducer
const getAll = state => state.playersGetReducers.allItems || []
const getFilter = state => state.changeFilter

const caseFilter = (items, filter ) => {
  let keys = Object.keys(filter)
  if (keys.length > 0) {
    for (let key of keys){
      if(key){
       switch (key) {         
          case SHOW_NAME:
            items = filter[SHOW_NAME] !== '' ? items.filter(t => t.name.toLowerCase().indexOf(filter[SHOW_NAME].toLowerCase()) !== -1) :items
          break
          case SHOW_POSITION:
            items = filter[SHOW_POSITION] !== '' ? items.filter(t => t.position.toLowerCase().indexOf(filter[SHOW_POSITION].toLowerCase()) !== -1) :items
          break
          case SHOW_AGE:
            items = filter[SHOW_AGE] !== '' ? items.filter(t => calculateYear(t.dateOfBirth) === parseInt(filter[SHOW_AGE], 10)) : items
          break
          default:
            throw new Error('Unknown filter: ' + key)
        } 
      }
    }
  }
  return items
}


export const getVisibilityFilter = createSelector(
  [getVisibility, getAll, getFilter],
  (visibility ,allItems, filter) => {
    switch(visibility){
      case SHOW_ALL:
        return allItems
      case SHOW_FILTER: 
        return caseFilter(allItems, filter)
      default:
        throw new Error('Unknown filter: ' + visibility)
    }
    
  }
)


