import { connect } from 'react-redux'
import { fetchPlayersIfNeeded } from '../actions'
import AppComponent from '../components/AppComponent'


const mapStateToProps = state =>  ({
  isFetching: state.playersGetReducers.isFetching
})

const mapDispatchToProps = dispatch => ({
  getPlayers: () => dispatch(fetchPlayersIfNeeded())
})


export default connect(
  mapStateToProps,
  mapDispatchToProps)(AppComponent)
