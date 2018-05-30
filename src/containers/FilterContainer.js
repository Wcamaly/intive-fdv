import { connect } from 'react-redux'
import { filterPlayer } from '../actions'
import {SHOW_ALL} from '../constants/constants'
import ButtonComponent from '../components/ButtonComponent'

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return ({
  filter: ownProps.filter
})}

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => {
    dispatch(filterPlayer(SHOW_ALL))
    dispatch(filterPlayer(ownProps.filter))
  }
})


const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonComponent)

export default FilterContainer
