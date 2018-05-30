import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MainContentContainer from '../containers/MainContentContainer' 
import HeaderContainer from '../containers/HeaderContainer'

class AppComponent extends Component {
  
  componentDidMount() {
    const { getPlayers, isFetching } = this.props
    if (isFetching === null || isFetching){
      getPlayers()
    }
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const {isFetching } = this.props 
    return (
      <div className="container-fluid">
        <HeaderContainer />
        <div className="row" >
          {isFetching 
            ? <div className="loader">&nbsp;</div>
            : <MainContentContainer  />
          }
        </div>
      </div>
    )
  }
}

AppComponent.propTypes = {
  isFetching: PropTypes.bool.isRequired
}

export default AppComponent
