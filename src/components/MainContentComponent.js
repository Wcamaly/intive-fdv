import React, { Component }  from 'react'
import PropTypes from 'prop-types'
import TableComponent from './TableComponent'
import {calculateYear} from '../utils/'


class MainContentComponent extends Component {

  getOptions(){
    return [{
      header: "Player",
      key:"name",
      callback: value => <span className='text-capitalize'>{value}</span>
    },
    {
      header: "Position",
      key:"position",
      callback: value => <span className='text-capitalize'>{value}</span>
    },
    {
      header: "Team",
      key:"nationality",
      callback: value => <span className='text-capitalize'>{value}</span>
    },
    {
      header: "Age",
      key:"dateOfBirth",
      callback: value => <span className='text-capitalize'>{calculateYear(value)}</span>
    }]
  }

  render() {
    const { items} = this.props
    return  (
      <TableComponent  
        items = {items}
        options= {this.getOptions()}/>
    )
  }
} 

MainContentComponent.propTypes = {
  items : PropTypes.array.isRequired
}

export default MainContentComponent