import { combineReducers } from 'redux'
import {playersGetReducers} from './getFetch'
import {playersFilterReducer, changeFilter} from './visibilityFilter'


const rootReducer = combineReducers({
  playersGetReducers,
  playersFilterReducer,
  changeFilter
})

export default rootReducer
