import { connect } from 'react-redux'
import MainContentComponent from '../components/MainContentComponent'
import { getVisibilityFilter } from '../selectors'

const mapStateToProps = state => ({
  items: getVisibilityFilter(state)
})

const mapDispatchToProps = dispatch => ({})


const MainContentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContentComponent)

export default MainContentContainer
