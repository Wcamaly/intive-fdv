import { connect } from 'react-redux'
import { changeFilter } from '../actions'
import HeaderComponent from '../components/HeaderComponent'

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  changeFilter : (value,key) => {
    let filter = {}
    filter[key]= value
    return dispatch(changeFilter(filter))}
})


const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent)

export default HeaderContainer
