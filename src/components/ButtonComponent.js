import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ButtonComponent extends Component {

  render() {
    const {setFilter, children, className, onClick} = this.props
    return (

      <button 
        className={className} 
        onClick={ () => {
          setFilter()
          if (typeof onClick === "function")
            onClick()
        }}>{children}</button>
    )
  }

}

ButtonComponent.propTypes = {
  setFilter: PropTypes.func.isRequired,
  filter : PropTypes.string,
  className: PropTypes.string,
  onClick : PropTypes.func
}

export default ButtonComponent